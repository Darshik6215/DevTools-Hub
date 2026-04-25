"""
Rate Limiting Middleware
Basic rate limiting to prevent abuse
"""

from fastapi import Request, HTTPException
from collections import defaultdict
from datetime import datetime, timedelta
import asyncio

class RateLimiter:
    """
    Simple in-memory rate limiter
    For production, use Redis or similar
    """
    
    def __init__(self, requests_per_minute: int = 60):
        self.requests_per_minute = requests_per_minute
        self.requests = defaultdict(list)
        self.cleanup_interval = 60  # seconds
        
    async def check_rate_limit(self, client_ip: str) -> bool:
        """
        Check if client has exceeded rate limit
        
        Args:
            client_ip: Client IP address
            
        Returns:
            True if within limit, False if exceeded
        """
        now = datetime.now()
        minute_ago = now - timedelta(minutes=1)
        
        # Clean old requests
        self.requests[client_ip] = [
            req_time for req_time in self.requests[client_ip]
            if req_time > minute_ago
        ]
        
        # Check limit
        if len(self.requests[client_ip]) >= self.requests_per_minute:
            return False
        
        # Add current request
        self.requests[client_ip].append(now)
        return True
    
    async def cleanup_old_entries(self):
        """Periodically cleanup old entries"""
        while True:
            await asyncio.sleep(self.cleanup_interval)
            now = datetime.now()
            minute_ago = now - timedelta(minutes=1)
            
            # Remove IPs with no recent requests
            ips_to_remove = []
            for ip, requests in self.requests.items():
                if not requests or all(req_time < minute_ago for req_time in requests):
                    ips_to_remove.append(ip)
            
            for ip in ips_to_remove:
                del self.requests[ip]

# Global rate limiter instance
rate_limiter = RateLimiter(requests_per_minute=60)

async def rate_limit_middleware(request: Request, call_next):
    """
    Middleware to apply rate limiting
    """
    # Get client IP
    client_ip = request.client.host
    
    # Check rate limit
    if not await rate_limiter.check_rate_limit(client_ip):
        raise HTTPException(
            status_code=429,
            detail="Too many requests. Please try again later."
        )
    
    # Process request
    response = await call_next(request)
    return response
