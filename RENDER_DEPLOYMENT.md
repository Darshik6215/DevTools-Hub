# Render Backend Deployment Guide

## Quick Deploy Steps

### Option 1: Using render.yaml (Recommended)

1. **Go to Render Dashboard**: https://dashboard.render.com/
2. **Click "New +"** → Select **"Blueprint"**
3. **Connect GitHub Repository**: `Darshik6215/DevTools-Hub`
4. **Render will auto-detect** `render.yaml` and configure everything
5. **Click "Apply"** and wait for deployment

### Option 2: Manual Setup

1. **Go to Render Dashboard**: https://dashboard.render.com/
2. **Click "New +"** → Select **"Web Service"**
3. **Connect GitHub Repository**: `Darshik6215/DevTools-Hub`
4. **Configure Settings**:
   - **Name**: `devtools-hub-backend`
   - **Runtime**: `Python 3`
   - **Build Command**: `pip install -r backend/requirements.txt`
   - **Start Command**: `cd backend && uvicorn app.main:app --host 0.0.0.0 --port $PORT`
   - **Python Version**: `3.12.0` (set in Environment Variables)
5. **Click "Create Web Service"**

## Environment Variables (Optional)

If you need to add environment variables:
- Go to your service → **Environment** tab
- Add variables from `backend/.env` if needed

## After Deployment

1. **Get your backend URL**: `https://devtools-hub-backend.onrender.com`
2. **Update Frontend Environment Variable**:
   - Go to Vercel Dashboard
   - Select your project
   - Go to **Settings** → **Environment Variables**
   - Add: `NEXT_PUBLIC_API_URL` = `https://your-backend-url.onrender.com`
   - Redeploy frontend

## Important Notes

- ✅ Free tier available (but may sleep after inactivity)
- ✅ First deploy takes 5-10 minutes
- ✅ Auto-deploys on GitHub push
- ⚠️ Free tier services sleep after 15 minutes of inactivity
- ⚠️ First request after sleep takes 30-60 seconds to wake up

## Troubleshooting

### Build Fails
- Check Python version in `backend/runtime.txt`
- Verify all dependencies in `backend/requirements.txt`

### Service Won't Start
- Check logs in Render dashboard
- Verify start command is correct
- Make sure port is `$PORT` (Render provides this)

### CORS Errors
- Backend already has CORS configured for all origins
- Check `backend/app/main.py` for CORS settings

## Alternative: Keep Client-Side Tools Only

If you don't want to deploy backend:
- ✅ JSON Formatter works client-side
- ✅ Password Generator works client-side
- ❌ Image Converter needs backend (or can be made client-side with browser APIs)

Your frontend is already configured to work without backend!
