<div align="center">

# AI Mock Interview Platform 🎙️🤖

_Real‑time voice interviews with instant feedback._

[Live Demo](https://ai-mock-interview-self-three.vercel.app/) • [GitHub Repo](https://github.com/yashG72/AI_mock_interview)

</div>

---

## 📖 Overview
**AI Mock Interview** helps students and professionals sharpen their interview skills by simulating real‑time voice calls with an AI interviewer.

1. **Ask & Answer** – The AI poses role‑specific questions and listens to spoken replies.  
2. **Instant Feedback** – Key points, improvement tips, and a confidence score are shown at the end of every session.  
3. **Session History** – Previous interviews are stored so users can track progress over time.

---

## ✨ Key Features
| Feature | Details |
| ------- | ------- |
| 🔊 **Voice Interaction** | Powered by **Vapi AI** for low‑latency speech‑to‑text / text‑to‑speech |
| 🔐 **Auth & Database**   | Firebase Auth + Firestore for user sessions and interview logs |
| ⚡ **Next 13 ( `app/` )** | Server Components + `next/font` (Geist) + built‑in image optimisation |
| 🎨 **Tailwind CSS**      | Mobile‑first, dark‑mode ready UI |
| 🚀 **Vercel Deployment** | Zero‑config CI/CD & automatic previews |

---

## 🖥️ Tech Stack
| Layer               | Tech |
| ------------------- | ---- |
| Frontend / SSR      | **Next.js 13**, **TypeScript**, **Tailwind CSS** |
| Realtime Voice AI   | **Vapi AI** |
| Auth & Database     | **Firebase Auth**, **Firestore** |
| Hosting / CI/CD     | **Vercel** |
| Lint & Formatting   | ESLint ✚ Prettier |

---

## 🔧 Local Setup

> **Prerequisites:** Node ≥ 18, pnpm / npm / yarn

```bash
# 1  Clone
git clone https://github.com/yashG72/AI_mock_interview.git
cd AI_mock_interview

# 2  Install deps
pnpm install        # or npm install / yarn

# 3  Environment
cp .env.example .env.local
#  → Add your Vapi, Firebase keys, etc.

# 4  Run dev server
pnpm dev            # or npm run dev / yarn dev
# Open http://localhost:3000
