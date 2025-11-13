# Multicode IDE

Multicode IDE is a MERN stack web application that allows users to create, edit, run, and manage coding projects in multiple programming languages directly from the browser. It features authentication, project management, and a powerful code editor powered by the Piston API for real-time code execution.

---

## ✨ Features
- User authentication (Signup, Login, Logout)
- Protected routes for authorized users only
- Create, edit, and delete projects
- Fetch and select programming languages using the Piston API
- Language selection with React Select
- Execute code in Python, JavaScript, C, C++, Java, and more
- Display all user projects on the home page
- Edit project names easily
- View single project page and run code instantly

---

## 🧰 Tech Stack
**Frontend:** React, Vite, TypeScript, Tailwind CSS, React Router, React Select, React Toastify  
**Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt  
**API:** Piston API (for runtime and code execution)  
**Hosting:** Vercel (Frontend), Render/Railway (Backend)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/cRohinic/Multicode-IDE.git
cd Multicode-IDE
cd ../frontend
npm install
npm run dev
