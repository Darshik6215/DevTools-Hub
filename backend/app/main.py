"""
FastAPI Main Application
DevTools Hub - Collection of developer tools with rate limiting
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import json_tool, password_tool, image_tool
from app.middleware.rate_limiter import rate_limit_middleware

# Initialize FastAPI app with enhanced metadata
app = FastAPI(
    title="DevTools Hub API",
    version="1.0.0",
    description="""
    REST API for developer tools including JSON formatter, password generator, and image converter.
    
    ## Features
    * JSON formatting and validation
    * Secure password generation
    * Image format conversion
    * Rate limiting protection
    * CORS enabled for web applications
    """,
    docs_url="/docs",
    redoc_url="/redoc",
    contact={
        "name": "DevTools Hub",
        "url": "https://devtoolskit.co.in/contact",
        "email": "support@devtools-hub.com",
    },
    license_info={
        "name": "MIT",
    },
)

# CORS configuration - Allow frontend to access API
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "https://devtoolskit.co.in",
        "https://devtools-hub-62u1.onrender.com"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Add rate limiting middleware
app.middleware("http")(rate_limit_middleware)

# Include API routers with tags
app.include_router(
    json_tool.router,
    prefix="/api/json",
    tags=["JSON Tools"],
    responses={429: {"description": "Too many requests"}}
)
app.include_router(
    password_tool.router,
    prefix="/api/password",
    tags=["Password Tools"],
    responses={429: {"description": "Too many requests"}}
)
app.include_router(
    image_tool.router,
    prefix="/api/image",
    tags=["Image Tools"],
    responses={429: {"description": "Too many requests"}}
)

@app.get("/", tags=["Root"])
@app.head("/", tags=["Root"])
async def root():
    """
    Root endpoint - API information
    
    Returns basic API information and available endpoints.
    Supports both GET and HEAD methods for health checks.
    """
    return {
        "message": "DevTools Hub API",
        "version": "1.0.0",
        "docs": "/docs",
        "redoc": "/redoc",
        "endpoints": {
            "json_formatter": "/api/json/format",
            "password_generator": "/api/password/generate",
            "image_converter": "/api/image/convert"
        }
    }

@app.get("/health", tags=["Health"])
@app.head("/health", tags=["Health"])
async def health_check():
    """
    Health check endpoint
    
    Returns the health status of the API.
    Supports both GET and HEAD methods.
    """
    return {
        "status": "healthy",
        "service": "DevTools Hub API",
        "version": "1.0.0"
    }
