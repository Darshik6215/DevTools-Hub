# DevTools Hub - Setup Instructions

## Quick Start Guide

Follow these steps to get the application running on your local machine.

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher) - [Download](https://nodejs.org/)
- **Python** (version 3.8 or higher) - [Download](https://www.python.org/)
- **npm** (comes with Node.js)
- **pip** (comes with Python)

---

## 🔧 Backend Setup (FastAPI)

### Step 1: Navigate to Backend Directory
```bash
cd backend
```

### Step 2: Create Virtual Environment
```bash
python -m venv venv
```

### Step 3: Activate Virtual Environment

**Windows (Git Bash):**
```bash
source venv/Scripts/activate
```

**Windows (Command Prompt):**
```cmd
venv\Scripts\activate
```

**macOS/Linux:**
```bash
source venv/bin/activate
```

### Step 4: Install Dependencies
```bash
pip install -r requirements.txt
```

### Step 5: Verify Environment Variables
Check that `.env` file exists with:
```env
PORT=8000
HOST=0.0.0.0
DEBUG=True
CORS_ORIGINS=http://localhost:3000
```

### Step 6: Start Backend Server
```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

✅ **Backend is now running!**
- API: http://localhost:8000
- Swagger Docs: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

---

## 🎨 Frontend Setup (Next.js)

### Step 1: Open New Terminal
Keep the backend terminal running and open a new terminal window.

### Step 2: Navigate to Frontend Directory
```bash
cd frontend
```

### Step 3: Install Dependencies
```bash
npm install
```

This will install:
- Next.js
- React
- Tailwind CSS
- All other dependencies

### Step 4: Verify Environment Variables
Check that `.env.local` file exists with:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Step 5: Start Development Server
```bash
npm run dev
```

✅ **Frontend is now running!**
- Application: http://localhost:3000

---

## 🧪 Testing the Application

### 1. Open Browser
Navigate to: http://localhost:3000

### 2. Test JSON Formatter
- Go to "JSON Formatter" tool
- Click "Load Sample" button
- Click "Format JSON"
- Verify formatted output appears

### 3. Test Password Generator
- Go to "Password Generator" tool
- Adjust length slider
- Select character options
- Click "Generate Secure Password"
- Click "Copy" to test clipboard functionality

### 4. Test Image Converter
- Go to "Image Converter" tool
- Upload an image file
- Select target format
- Click "Convert Image"
- Click "Download" to save converted image

---

## 📚 API Documentation

Once backend is running, visit:
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

You can test all API endpoints directly from the documentation.

---

## 🛠️ Troubleshooting

### Backend Issues

**Problem: `uvicorn: command not found`**
```bash
# Make sure virtual environment is activated
source venv/Scripts/activate  # Windows
source venv/bin/activate      # macOS/Linux

# Reinstall dependencies
pip install -r requirements.txt
```

**Problem: Port 8000 already in use**
```bash
# Use different port
uvicorn app.main:app --reload --port 8001

# Update frontend .env.local
NEXT_PUBLIC_API_URL=http://localhost:8001
```

**Problem: CORS errors**
- Check that backend `.env` has correct CORS_ORIGINS
- Verify frontend is running on http://localhost:3000
- Restart both servers

### Frontend Issues

**Problem: `npm: command not found`**
- Install Node.js from https://nodejs.org/
- Restart terminal after installation

**Problem: Port 3000 already in use**
```bash
# Next.js will automatically suggest port 3001
# Or kill the process using port 3000
```

**Problem: API calls failing**
- Verify backend is running on http://localhost:8000
- Check `.env.local` has correct API URL
- Check browser console for errors

---

## 🚀 Production Build

### Backend Production
```bash
cd backend
source venv/Scripts/activate
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

### Frontend Production
```bash
cd frontend
npm run build
npm start
```

---

## 📝 Development Tips

### Hot Reload
- Backend: `--reload` flag enables auto-restart on code changes
- Frontend: Next.js has built-in hot reload

### Code Structure
- Backend routes: `backend/app/routes/`
- Frontend pages: `frontend/app/`
- Reusable components: `frontend/components/`
- API client: `frontend/lib/api.js`

### Adding New Tools
1. Create route in `backend/app/routes/`
2. Create service in `backend/app/services/`
3. Create schema in `backend/app/schemas/`
4. Add route to `backend/app/main.py`
5. Create page in `frontend/app/[tool-name]/page.js`
6. Add API function in `frontend/lib/api.js`
7. Update navigation in `frontend/components/Navbar.jsx`

---

## 🔒 Security Notes

- Never commit `.env` files to version control
- Use environment variables for sensitive data
- Backend validates all inputs
- Frontend sanitizes user inputs
- CORS is properly configured

---

## 📞 Support

If you encounter any issues:
1. Check this guide thoroughly
2. Review error messages in terminal
3. Check browser console for frontend errors
4. Verify all prerequisites are installed
5. Ensure both servers are running

---

## ✅ Checklist

Before starting development:
- [ ] Python 3.8+ installed
- [ ] Node.js 18+ installed
- [ ] Backend virtual environment created
- [ ] Backend dependencies installed
- [ ] Backend server running on port 8000
- [ ] Frontend dependencies installed
- [ ] Frontend server running on port 3000
- [ ] Can access http://localhost:3000
- [ ] Can access http://localhost:8000/docs
- [ ] All three tools working correctly

---

**Happy Coding! 🎉**
