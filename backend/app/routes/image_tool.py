"""
Image Tool Routes
API endpoints for image format conversion
"""

from fastapi import APIRouter, UploadFile, File, Form, HTTPException
from app.services.image_service import convert_image_format

router = APIRouter()

@router.post("/convert")
async def convert_image(
    file: UploadFile = File(..., description="Image file to convert"),
    format: str = Form(..., description="Target format (png, jpg, webp, gif)")
):
    """
    Convert image to different format
    
    Args:
        file: Uploaded image file
        format: Target format (png, jpg, webp, gif)
        
    Returns:
        Dictionary with converted image data (base64 encoded)
        
    Raises:
        HTTPException: If conversion fails or format unsupported
    """
    
    # Validate file type
    if not file.content_type or not file.content_type.startswith('image/'):
        raise HTTPException(
            status_code=400,
            detail="Invalid file type. Please upload an image file."
        )
    
    try:
        result = await convert_image_format(file, format)
        return result
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Conversion failed: {str(e)}")
