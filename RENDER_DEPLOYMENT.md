# Render Backend Deployment Guide

## ⚠️ IMPORTANT: Python Version Issue Fixed

The repository now includes:
- ✅ `runtime.txt` in root directory (Python 3.11.0)
- ✅ `.python-version` file (Python 3.11.0)
- ✅ `render.yaml` with correct Python version
- ✅ Stable dependencies (Pydantic 2.9.2)

## Quick Deploy Steps

### Option 1: Using render.yaml (Recommended - Easiest)

1. **Go to Render Dashboard**: https://dashboard.render.com/
2. **Click "New +"** → Select **"Blueprint"**
3. **Connect GitHub Repository**: `Darshik6215/DevTools-Hub`
4. **Render will auto-detect** `render.yaml` and configure everything
5. **Click "Apply"** and wait for deployment (5-10 minutes)

### Option 2: Manual Setup

1. **Go to Render Dashboard**: https://dashboard.render.com/
2. **Click "New +"** → Select **"Web Service"**
3. **Connect GitHub Repository**: `Darshik6215/DevTools-Hub`
4. **Configure Settings**:
   - **Name**: `devtools-hub-backend`
   - **Runtime**: `Python 3`
   - **Root Directory**: Leave empty (or set to `backend`)
   - **Build Command**: `pip install --upgrade pip && pip install -r backend/requirements.txt`
   - **Start Command**: `cd backend && uvicorn app.main:app --host 0.0.0.0 --port $PORT`
   - **Python Version**: Will auto-detect from `runtime.txt` (3.11.0)
5. **Click "Create Web Service"**

## Environment Variables (Optional)

If you need to add environment variables:
- Go to your service → **Environment** tab
- Add variables from `backend/.env` if needed

## After Deployment

1. **Get your backend URL**: `https://devtools-hub-backend.onrender.com` (or similar)
2. **Test the API**: Visit `https://your-backend-url.onrender.com/` - should see `{"message": "Welcome to DevTools Hub API"}`
3. **Update Frontend Environment Variable** (Optional):
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
- ✅ Python 3.11.0 is used (stable and compatible with all dependencies)

## Troubleshooting

### Build Fails with "Read-only file system"
- ✅ **FIXED**: Now using Python 3.11.0 with pre-built wheels
- ✅ `runtime.txt` is in root directory
- ✅ Pydantic 2.9.2 has pre-built wheels (no Rust compilation needed)

### Service Won't Start
- Check logs in Render dashboard
- Verify start command is correct
- Make sure port is `$PORT` (Render provides this)

### CORS Errors
- Backend already has CORS configured for all origins
- Check `backend/app/main.py` for CORS settings

## Alternative: Keep Client-Side Tools Only (Easiest)

If you don't want to deploy backend:
- ✅ JSON Formatter works client-side (already implemented)
- ✅ Password Generator works client-side (already implemented)
- ❌ Image Converter needs backend (or can be made client-side with browser APIs)

**Your frontend is already configured to work without backend!**

## What Changed to Fix the Error?

1. **Moved `runtime.txt` to root directory** - Render looks for it there
2. **Changed Python 3.12.0 → 3.11.0** - More stable, better wheel support
3. **Downgraded Pydantic 2.10.4 → 2.9.2** - Has pre-built wheels (no Rust compilation)
4. **Added `.python-version` file** - Backup Python version specification
5. **Updated `render.yaml`** - Correct Python version and build command

Now deployment should work! 🚀
