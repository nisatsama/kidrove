import express from "express";
import mongoose from "mongoose";
import Enquiry from "./model/Enquiry.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: [
      "https://kidrove.vercel.app", // Replace with your frontend URL
      "http://localhost:5173", // Local development
    ],
    methods: ["GET", "POST"],
    credentials: true,
  }),
);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.error("MongoDB Error ❌", err));

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).send("Server is running 🚀");
});

// Enquiry API
app.post("/enquiry", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validation
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and phone are required fields",
      });
    }

    // Email Validation
    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // Save to MongoDB
    const newEnquiry = new Enquiry({
      name,
      email,
      phone,
      message: message || "",
    });

    await newEnquiry.save();

    return res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully 🎉",
      data: newEnquiry,
    });
  } catch (err) {
    console.error("Enquiry Error:", err);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

export default app;
