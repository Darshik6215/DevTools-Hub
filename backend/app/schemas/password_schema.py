"""
Password Schema Module
Pydantic models for password generation requests and responses
"""

from pydantic import BaseModel, Field

class PasswordRequest(BaseModel):
    """
    Password generation request model
    
    Attributes:
        length: Password length (8-64 characters)
        include_uppercase: Include uppercase letters (A-Z)
        include_lowercase: Include lowercase letters (a-z)
        include_numbers: Include numbers (0-9)
        include_symbols: Include special symbols
    """
    length: int = Field(default=16, ge=8, le=64, description="Password length (8-64)")
    include_uppercase: bool = Field(default=True, description="Include uppercase letters")
    include_lowercase: bool = Field(default=True, description="Include lowercase letters")
    include_numbers: bool = Field(default=True, description="Include numbers")
    include_symbols: bool = Field(default=True, description="Include symbols")

class PasswordResponse(BaseModel):
    """
    Password generation response model
    
    Attributes:
        password: Generated password string
    """
    password: str = Field(..., description="Generated password")
