# InterviewForge AI

AI-powered interview preparation platform that helps candidates:
- analyze job fit,
- generate technical and behavioral interview questions,
- identify skill gaps,
- build a day-wise preparation roadmap,
- generate tailored resume PDFs.

## Tech Stack

- Frontend: React + Vite + SCSS
- Backend: Node.js + Express + MongoDB (Mongoose)
- AI: Google GenAI (`@google/genai`)
- PDF: Puppeteer
- Auth: JWT + HTTP-only cookies

## Project Structure

```text
.
├─ Frontend/
│  └─ React app
└─ Backend/
   └─ Express API
```

## Environment Variables

### Backend (`Backend/.env`)

Use `Backend/.env.example` as reference:

- `MONGO_URI`
- `JWT_SECRET`
- `GOOGLE_GENAI_API_KEY`
- `GENAI_MODELS`
- `GENAI_RETRIES_PER_MODEL`
- `GENAI_RETRY_BASE_DELAY_MS`
- `FRONTEND_ORIGINS`
- `NODE_ENV`

### Frontend (`Frontend/.env`)

Use `Frontend/.env.example` as reference:

- `VITE_API_BASE_URL`

## Local Development

### 1. Install dependencies

```bash
cd Backend
npm install

cd ../Frontend
npm install
```

### 2. Run backend

```bash
cd Backend
npm run dev
```

Backend runs on `http://localhost:3000`.

### 3. Run frontend

```bash
cd Frontend
npm run dev
```

Frontend runs on `http://localhost:5173`.

## Production Build

### Frontend

```bash
cd Frontend
npm run build
```

### Backend

```bash
cd Backend
npm start
```

## API Overview

Base URL: `/api`

### Auth

- `POST /auth/register`
- `POST /auth/login`
- `GET /auth/logout`
- `GET /auth/get-me`

### Interview

- `POST /interview/` (multipart form data)
- `GET /interview/`
- `GET /interview/report/:interviewId`
- `POST /interview/resume/pdf/:interviewReportId`

## Deployment (Recommended)

- Backend: Render (Node web service)
- Frontend: Vercel (Vite app)

Important:
- Set `VITE_API_BASE_URL` to your deployed backend URL.
- Set `FRONTEND_ORIGINS` to your deployed frontend domain.
- Keep `NODE_ENV=production` in backend.
- Puppeteer requires a full Node runtime (not basic serverless functions).

## Postman

Use included files:
- `Backend/postman_collection.json`
- `Backend/postman_environment.json`

## License

This project is for educational and portfolio use.
