import express from "express";
import mongoose from "mongoose";
import Enquiry from "./model/Enquiry.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.error("MongoDB Error ❌", err));

// ✅ POST API
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

    // Email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // ✅ Save to MongoDB
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
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});
app.get("/", (req, res) => {
  res.send("Server is running");
});
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
