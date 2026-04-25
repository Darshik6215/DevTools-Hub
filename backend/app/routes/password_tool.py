"""
Password Tool Routes
API endpoints for password generation
"""

from fastapi import APIRouter, HTTPException
from app.schemas.password_schema import PasswordRequest, PasswordResponse
from app.services.password_service import generate_secure_password

router = APIRouter()

@router.post("/generate", response_model=PasswordResponse)
async def generate_password(request: PasswordRequest):
    """
    Generate secure random password
    
    Args:
        request: PasswordRequest with generation options
        
    Returns:
        PasswordResponse with generated password
        
    Raises:
        HTTPException: If generation fails or invalid options
    """
    try:
        password = generate_secure_password(
            length=request.length,
            include_uppercase=request.include_uppercase,
            include_lowercase=request.include_lowercase,
            include_numbers=request.include_numbers,
            include_symbols=request.include_symbols
        )
        return PasswordResponse(password=password)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")
