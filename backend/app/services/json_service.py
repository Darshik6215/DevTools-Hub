"""
JSON Service Module
Handles JSON formatting and validation logic
"""

import json
from typing import Dict, Any

def format_json_string(json_string: str) -> str:
    """
    Format and validate JSON string
    
    Args:
        json_string: Raw JSON string to format
        
    Returns:
        Formatted JSON string with proper indentation
        
    Raises:
        ValueError: If JSON is invalid
    """
    try:
        # Parse JSON to validate
        parsed = json.loads(json_string)
        
        # Format with 2-space indentation
        formatted = json.dumps(parsed, indent=2, ensure_ascii=False, sort_keys=False)
        
        return formatted
    except json.JSONDecodeError as e:
        raise ValueError(f"Invalid JSON: {str(e)}")
