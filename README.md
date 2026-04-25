# DevTools Hub

A full-stack web application providing useful developer tools built with Next.js and FastAPI.

## 🚀 Features

### Available Tools

1. **JSON Formatter & Validator**
   - Format and beautify JSON data
   - Validate JSON syntax
   - Error detection and reporting
   - Copy formatted output

2. **Password Generator**
   - Generate secure random passwords
   - Customizable length (8-64 characters)
   - Character type options (uppercase, lowercase, numbers, symbols)
   - Password strength indicator
   - One-click copy to clipboard

3. **Image Converter**
   - Convert between PNG, JPG, WebP, and GIF formats
   - Drag-and-drop file upload
   - Image preview
   - High-quality conversion
   - Instant download

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS** for styling
- **JavaScript** (ES6+)

### Backend
- **FastAPI** (Python)
- **Pydantic** for data validation
- **Pillow** for image processing
- **Uvicorn** ASGI server

## 📁 Project Structure

```
devtools-hub/
├── frontend/
│   ├── app/
│   │   ├── layout.js              # Root layout with SEO
│   │   ├── page.js                # Home page
│   │   ├── json-formatter/
│   │   │   └── page.js
│   │   ├── password-generator/
│   │   │   └── page.js
│   │   └── image-converter/
│   │       └── page.js
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ToolLayout.jsx
│   │   └── LoadingSpinner.jsx
│   ├── lib/
│   │   └── api.js                 # API client
│   ├── styles/
│   │   └── globals.css
│   └── package.json
│
└── backend/
    ├── app/
    │   ├── main.py                # FastAPI app
    │   ├── routes/
    │   │   ├── json_tool.py
    │   │   ├── password_tool.py
    │   │   └── image_tool.py
    │   ├── schemas/
    │   │   ├── json_schema.py
    │   │   └── password_schema.py
    │   ├── services/
    │   │   ├── json_service.py
    │   │   ├── password_service.py
    │   │   └── image_service.py
    │   └── utils/
    │       └── helpers.py
    └── requirements.txt
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and npm
- **Python** 3.8+
- **pip** (Python package manager)

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Create virtual environment:
```bash
python -m venv venv
```

3. Activate virtual environment:
```bash
# Windows
source venv/Scripts/activate

# macOS/Linux
source venv/bin/activate
```

4. Install dependencies:
```bash
pip install -r requirements.txt
```

5. Run the server:
```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

Backend will be available at: `http://localhost:8000`
- API Documentation: `http://localhost:8000/docs`
- Alternative Docs: `http://localhost:8000/redoc`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

Frontend will be available at: `http://localhost:3000`

## 🔧 Environment Variables

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Backend (.env)
```env
PORT=8000
HOST=0.0.0.0
DEBUG=True
CORS_ORIGINS=http://localhost:3000
```

## 📦 Build for Production

### Frontend
```bash
cd frontend
npm run build
npm start
```

### Backend
```bash
cd backend
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

## 🎨 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ SEO optimized with meta tags
- ✅ Loading states and error handling
- ✅ Clean and modern UI
- ✅ Fast performance
- ✅ Secure password generation
- ✅ Client-side and server-side validation
- ✅ Comprehensive API documentation

## 🔒 Security

- Passwords generated using cryptographically secure random number generator
- CORS properly configured
- Input validation on both frontend and backend
- File type and size validation for uploads
- No data stored on server

## 📝 API Endpoints

### JSON Formatter
- `POST /api/json/format` - Format and validate JSON

### Password Generator
- `POST /api/password/generate` - Generate secure password

### Image Converter
- `POST /api/image/convert` - Convert image format

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

DevTools Hub Team

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- FastAPI team for the excellent Python framework
- Tailwind CSS for the utility-first CSS framework
