"""
Image Service Module
Handles image format conversion
"""

from fastapi import UploadFile, HTTPException
from PIL import Image
import io
import base64
from typing import Dict

# Supported image formats
SUPPORTED_FORMATS = ['png', 'jpg', 'jpeg', 'webp', 'gif']

async def convert_image_format(file: UploadFile, target_format: str) -> Dict[str, any]:
    """
    Convert image to specified format
    
    Args:
        file: Uploaded image file
        target_format: Target format (png, jpg, webp, gif)
        
    Returns:
        Dictionary with converted image data
        
    Raises:
        HTTPException: If conversion fails or format unsupported
    """
    
    # Validate target format
    if target_format.lower() not in SUPPORTED_FORMATS:
        raise HTTPException(
            status_code=400,
            detail=f"Unsupported format. Supported formats: {', '.join(SUPPORTED_FORMATS)}"
        )
    
    try:
        # Read uploaded file
        contents = await file.read()
        image = Image.open(io.BytesIO(contents))
        
        # Convert RGBA to RGB if saving as JPEG (JPEG doesn't support transparency)
        if target_format.lower() in ['jpg', 'jpeg'] and image.mode in ['RGBA', 'LA', 'P']:
            # Create white background
            background = Image.new('RGB', image.size, (255, 255, 255))
            if image.mode == 'P':
                image = image.convert('RGBA')
            background.paste(image, mask=image.split()[-1] if image.mode == 'RGBA' else None)
            image = background
        
        # Save to bytes buffer
        output = io.BytesIO()
        save_format = 'JPEG' if target_format.lower() == 'jpg' else target_format.upper()
        
        # Optimize image quality
        if save_format == 'JPEG':
            image.save(output, format=save_format, quality=95, optimize=True)
        elif save_format == 'PNG':
            image.save(output, format=save_format, optimize=True)
        elif save_format == 'WEBP':
            image.save(output, format=save_format, quality=90)
        else:
            image.save(output, format=save_format)
        
        output.seek(0)
        
        # Convert to base64 for response
        encoded = base64.b64encode(output.read()).decode()
        
        return {
            "url": f"data:image/{target_format};base64,{encoded}",
            "format": target_format,
            "size": len(encoded)
        }
        
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Image conversion failed: {str(e)}"
        )
