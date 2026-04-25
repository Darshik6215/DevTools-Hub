"""
Password Service Module
Handles secure password generation
"""

import random
import string
import secrets

def generate_secure_password(
    length: int = 16,
    include_uppercase: bool = True,
    include_lowercase: bool = True,
    include_numbers: bool = True,
    include_symbols: bool = True
) -> str:
    """
    Generate a cryptographically secure random password
    
    Args:
        length: Password length (8-64 characters)
        include_uppercase: Include uppercase letters (A-Z)
        include_lowercase: Include lowercase letters (a-z)
        include_numbers: Include numbers (0-9)
        include_symbols: Include special symbols
        
    Returns:
        Generated password string
        
    Raises:
        ValueError: If no character types selected or invalid length
    """
    
    # Build character pool based on options
    characters = ""
    
    if include_uppercase:
        characters += string.ascii_uppercase
    if include_lowercase:
        characters += string.ascii_lowercase
    if include_numbers:
        characters += string.digits
    if include_symbols:
        characters += "!@#$%^&*()_+-=[]{}|;:,.<>?"
    
    # Validate character pool
    if not characters:
        raise ValueError("At least one character type must be selected")
    
    # Validate length
    if length < 8 or length > 64:
        raise ValueError("Password length must be between 8 and 64 characters")
    
    # Generate password using secrets module for cryptographic security
    password = ''.join(secrets.choice(characters) for _ in range(length))
    
    return password
