# 🚀 Alex Mercer — Full Stack Portfolio

A visually stunning, fully responsive portfolio website built with React (Vite), Tailwind CSS, Framer Motion on the frontend, and Node.js + Express + MongoDB on the backend.

---

## 📁 Project Structure

```
portfolio/
├── frontend/                    # React (Vite) app
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx       # Sticky nav, active highlight, mobile menu
│   │   │   ├── Hero.jsx         # Full-screen landing with animated gradient
│   │   │   ├── About.jsx        # Bio, animated skill bars
│   │   │   ├── Projects.jsx     # 6-card grid with tilt/glow effects
│   │   │   ├── Experience.jsx   # Animated vertical timeline
│   │   │   ├── Contact.jsx      # Full-stack form → MongoDB
│   │   │   └── Loader.jsx       # Animated page loader
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── backend/                     # Node.js + Express API
│   ├── models/
│   │   └── Contact.js           # Mongoose schema
│   ├── routes/
│   │   └── contactRoutes.js     # POST /api/contact
│   ├── server.js                # Express entry point
│   ├── .env.example             # Environment variables template
│   └── package.json
│
└── README.md
```

---

## ⚡ Quick Start

### 1. Clone & Install

```bash
# Backend
cd portfolio/backend
npm install

# Frontend
cd ../frontend
npm install
```

### 2. Configure Environment

```bash
# In backend/
cp .env.example .env
```

Edit `backend/.env`:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/portfolio
CLIENT_URL=http://localhost:5173
```

> **MongoDB Atlas (cloud):** Replace `MONGO_URI` with your Atlas connection string.

### 3. Run Development Servers

```bash
# Terminal 1 — Backend
cd backend
npm run dev       # runs on http://localhost:5000

# Terminal 2 — Frontend
cd frontend
npm run dev       # runs on http://localhost:5173
```

---

## 🌐 API Reference

### POST `/api/contact`

Saves a contact form submission to MongoDB.

**Request body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "Hello! I have an exciting project..."
}
```

**Success response (201):**
```json
{
  "success": true,
  "message": "Message received! I will get back to you soon.",
  "data": { "id": "64abc123..." }
}
```

**Error response (400):**
```json
{
  "success": false,
  "message": "Please enter a valid email address"
}
```

---

## 🎨 Design System

| Token       | Value                                          |
|-------------|------------------------------------------------|
| Background  | `#050508` (void)                               |
| Surface     | `#0a0a12`                                      |
| Panel       | `#0f0f1a`                                      |
| Accent      | `#7c3aed` violet · `#06b6d4` cyan · `#ec4899` pink |
| Font        | Clash Display (headings) · Satoshi (body) · JetBrains Mono |

---

## 🛠 Tech Stack

| Layer     | Technology                              |
|-----------|-----------------------------------------|
| Frontend  | React 18, Vite, Tailwind CSS, Framer Motion |
| Icons     | React Icons                             |
| Toast     | React Hot Toast                         |
| Backend   | Node.js, Express.js                     |
| Database  | MongoDB, Mongoose                       |
| Security  | CORS, input sanitization, validation    |

---

## 📦 Build for Production

```bash
# Frontend
cd frontend
npm run build      # outputs to frontend/dist/

# Backend (start production server)
cd backend
npm start
```

### Deploy Options
- **Frontend:** Vercel, Netlify, or serve `dist/` via Express
- **Backend:** Railway, Render, Fly.io, or any Node.js host
- **Database:** MongoDB Atlas (free tier available)

---

## 🔒 Security Features

- CORS configured to allow only the frontend origin
- Input validation on both frontend and backend
- Basic XSS sanitization (`<` / `>` escaping)
- Mongoose schema-level validation
- Request body size limit (10kb)
- Empty submission prevention

---

## ✏️ Customization Guide

1. **Your info** → Edit `Hero.jsx`, `About.jsx`, `Experience.jsx`
2. **Projects** → Edit the `projects` array in `Projects.jsx`
3. **Skills** → Edit `skillCategories` in `About.jsx`
4. **Colors** → Edit CSS variables in `index.css` and `tailwind.config.js`
5. **Fonts** → Change `@import` in `index.html` + `tailwind.config.js`
6. **Resume** → Place your `resume.pdf` in `frontend/public/`

---

## 📄 License

MIT — free to use, modify, and deploy.
