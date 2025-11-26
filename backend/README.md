# Portfolio Backend

Express.js backend API for serving portfolio data.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables in `.env`

3. Start the server:
```bash
npm run dev
```

Server will run on `http://localhost:5000`

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/about` - About information
- `GET /api/projects` - Projects list
- `GET /api/skills` - Skills list
- `POST /api/contact` - Contact form submission

## Project Structure

- `server.js` - Main server file
- `routes/` - API route handlers
- `models/` - Database models (MongoDB)
- `controllers/` - Business logic
