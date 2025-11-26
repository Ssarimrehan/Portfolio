## Copilot / AI agent instructions for this repository

This is a React frontend portfolio app. `Backend/` is empty and reserved for future server code.

### Frontend (`Frontend/`)

- **Framework:** React 19 (via Create React App)
- **Run:** `npm start` — starts dev server on http://localhost:3000
- **Build:** `npm run build` — production bundle to `build/`
- **Key files:** `src/App.js` (main component), `public/index.html` (entry point)
- **Structure:** Minimal setup with no test files, logos, or CSS—keep it clean

### Backend (`Backend/`)

- Currently empty. If adding a backend, create a `Backend/README.md` with setup instructions.
- Integration: frontend will call backend via fetch/axios; ensure CORS headers and matching API routes.

### Architecture rules

- Keep Frontend changes in `Frontend/` only, Backend in `Backend/`.
- Update this file if adding a new runtime (e.g., Python, Node server, Docker).
