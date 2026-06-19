# 🚀 Kidrove – AI & Robotics Workshop Landing Page

Kidrove is a modern full-stack web application designed for promoting and managing registrations for an AI & Robotics Workshop for children aged 8–14 years.

The platform provides an engaging landing page experience, workshop details, learning outcomes, FAQ support, and a registration system that stores user enquiries in a MongoDB database.

---

## 📌 Project Background

This project was developed as part of an internship selection assessment to demonstrate practical full-stack development skills, including frontend design, backend API development, database integration, and deployment.

The goal was to build a production-ready workshop registration platform with a clean user experience and functional backend services.

---
## 🔗 Live Demo

### Frontend Application

https://kidrove-lyart.vercel.app/

### Backend API

https://kidrove-api-alpha.vercel.app/

### Test API Endpoint

```http
POST https://kidrove-api-alpha.vercel.app/enquiry
```

---

## 🚀 Deployment

### Frontend

* Hosted on Vercel
* React.js + Tailwind CSS

### Backend

* Hosted on Vercel Serverless Functions
* Node.js + Express.js
* MongoDB Atlas Database

The frontend communicates with the deployed backend API to store workshop registration and enquiry data in MongoDB Atlas.

## ✨ Features

### 🎯 Landing Page

* Modern and responsive UI
* Kid-friendly design for AI & Robotics workshops
* Smooth user experience across devices

### 📚 Workshop Information

* Detailed workshop overview
* Learning outcomes section
* Benefits and highlights

### 🤖 Interactive FAQ

* Expandable FAQ section
* AI assistant style chat interface
* Quick answers for common queries

### 📝 Registration System

* User registration form
* Form validation
* Data storage in MongoDB

### 💬 Contact & Enquiry Support

* Submit enquiries
* Backend API integration
* Persistent database storage

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Framer Motion
* React Router

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Deployment

* Vercel (Frontend)
* Render / Vercel Serverless Functions (Backend)

---

## 📂 Project Structure

```bash
Kidrove/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── backend/
│   ├── models/
│   │   └── Enquiry.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/kidrove.git
cd kidrove
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

### Environment Variables

Create a `.env` file inside the backend folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## 📡 API Endpoint

### Submit Registration / Enquiry

```http
POST /api/enquiry
```

Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210"
}
```

---

## 🎨 Key Learning Outcomes

Through this project, I gained experience in:

* Building responsive React applications
* Designing modern UIs with Tailwind CSS
* Creating REST APIs using Express.js
* MongoDB database integration with Mongoose
* Frontend-backend communication
* Deployment and hosting workflows
* Version control using Git & GitHub

---

## 🔮 Future Improvements

* Authentication & Admin Dashboard
* Email Notifications
* Workshop Seat Management
* Payment Gateway Integration
* AI-powered chatbot support
* Analytics Dashboard

---

## 👩‍💻 Author

**Nisat Sama**

B.Tech Computer Science Engineering Student

Passionate about Full-Stack Development, Software Engineering, AI, and building impactful technology solutions.

---

## 📄 License

This project is created for educational and portfolio purposes.
