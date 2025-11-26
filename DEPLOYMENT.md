# Portfolio Deployment Guide

## Vercel Deployment Setup

Your portfolio is now configured for deployment on Vercel with separate frontend and backend repositories.

### Backend (Express.js)

**Repository:** portfolio-backend  
**Deployed URL:** https://portfolio-backend-five-tau.vercel.app

**Setup:**

1. Push the `backend` folder to a new GitHub repository named `portfolio-backend`
2. Connect to Vercel:
   - Go to https://vercel.com/import
   - Import from GitHub: `portfolio-backend`
   - Vercel will automatically detect `vercel.json`
   - No environment variables needed
3. Deploy!

### Frontend (React)

**Repository:** portfolio  
**Deployed URL:** https://your-portfolio.vercel.app (to be set)

**Setup:**

1. Push the `frontend` folder to GitHub as main repository
2. Connect to Vercel:
   - Go to https://vercel.com/import
   - Import from GitHub: `portfolio` (or your repo name)
   - Set environment variable:
     - Key: `REACT_APP_API_URL`
     - Value: `https://portfolio-backend-five-tau.vercel.app`
   - Vercel will auto-detect `vercel.json` in frontend
3. Deploy!

## Environment Variables

### Development (`.env`)

```
REACT_APP_API_URL=http://localhost:5000
```

### Production (`.env.production`)

```
REACT_APP_API_URL=https://portfolio-backend-five-tau.vercel.app
```

## Testing Locally

```bash
# Terminal 1: Start Backend
cd backend
npm start
# Runs on http://localhost:5000

# Terminal 2: Start Frontend
cd frontend
npm start
# Runs on http://localhost:3000
```

## API Endpoints

All endpoints are available at: `https://portfolio-backend-five-tau.vercel.app/api/`

- `GET /api/about` - Profile information
- `GET /api/skills` - Technical skills
- `GET /api/projects` - Portfolio projects
- `GET /api/experience` - Work experience & education
- `GET /api/contact` - Contact information
- `POST /api/contact` - Submit contact form

## Troubleshooting

### "Invalid JSON" Error

- Ensure backend is running and accessible
- Check browser console for actual error
- Verify `REACT_APP_API_URL` environment variable is set
- Check CORS headers are present in response

### Component not rendering

- Check browser DevTools Console for errors
- Verify API is returning correct data structure
- Look for console.log() statements showing API URLs being called

## File Structure

```
Portfolio/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── vercel.json
└── frontend/
    ├── src/
    │   ├── config/
    │   │   └── api.js (centralized API configuration)
    │   ├── pages/
    │   │   ├── About.jsx
    │   │   ├── Skills.jsx
    │   │   ├── Projects.jsx
    │   │   ├── Experience.jsx
    │   │   └── Contact.jsx
    │   ├── App.jsx
    │   └── App.css
    ├── .env (local development)
    ├── .env.production (Vercel production)
    ├── vercel.json
    └── package.json
```
