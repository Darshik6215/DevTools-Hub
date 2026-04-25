# FastAPI Backend

## Setup

1. Create virtual environment:
```bash
python -m venv venv
source venv/Scripts/activate  # Windows
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the server:
```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

## API Documentation

Once running, visit:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Project Structure

- `app/main.py` - Main application entry point
- `app/routes/` - API route handlers
- `app/schemas/` - Pydantic models for request/response
- `app/services/` - Business logic
- `app/utils/` - Helper functions
