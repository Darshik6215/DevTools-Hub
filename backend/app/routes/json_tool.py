"""
JSON Tool Routes
API endpoints for JSON formatting and validation
"""

from fastapi import APIRouter, HTTPException
from app.schemas.json_schema import JsonFormatRequest, JsonFormatResponse
from app.services.json_service import format_json_string

router = APIRouter()

@router.post("/format", response_model=JsonFormatResponse)
async def format_json(request: JsonFormatRequest):
    """
    Format and validate JSON string
    
    Args:
        request: JsonFormatRequest with json_string field
        
    Returns:
        JsonFormatResponse with formatted JSON and validity status
        
    Raises:
        HTTPException: If JSON is invalid
    """
    try:
        formatted = format_json_string(request.json_string)
        return JsonFormatResponse(formatted=formatted, valid=True)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")
