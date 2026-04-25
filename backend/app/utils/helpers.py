"""Utility helper functions"""

def validate_file_extension(filename: str, allowed_extensions: list) -> bool:
    """Validate if file has allowed extension"""
    return any(filename.lower().endswith(ext) for ext in allowed_extensions)

def sanitize_filename(filename: str) -> str:
    """Sanitize filename to prevent security issues"""
    import re
    # Remove any non-alphanumeric characters except dots and dashes
    return re.sub(r'[^\w\-.]', '_', filename)
