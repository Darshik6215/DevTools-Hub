"""
JSON Schema Module
Pydantic models for JSON formatting requests and responses
"""

from pydantic import BaseModel, Field

class JsonFormatRequest(BaseModel):
    """
    JSON formatting request model
    
    Attributes:
        json_string: Raw JSON string to format
    """
    json_string: str = Field(..., description="JSON string to format and validate")

class JsonFormatResponse(BaseModel):
    """
    JSON formatting response model
    
    Attributes:
        formatted: Formatted JSON string
        valid: Whether JSON is valid
    """
    formatted: str = Field(..., description="Formatted JSON string")
    valid: bool = Field(..., description="Whether JSON is valid")
