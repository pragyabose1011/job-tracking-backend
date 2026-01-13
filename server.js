import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

/* ---------- Middleware ---------- */
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));
app.use(morgan("tiny"));

/* ---------- Health Check (IMPORTANT) ---------- */
app.get("/", (req, res) => {
  res.status(200).send("Job Tracking API is running");
});

/* ---------- Database ---------- */
const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is missing");
  }

  await mongoose.connect(process.env.MONGO_URI);
  console.log("✅ MongoDB connected");
};

/* ---------- Start Server ---------- */
const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Startup failed:", err.message);
    process.exit(1);
  }
};

start();

