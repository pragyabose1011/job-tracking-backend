import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

/* ===================== MIDDLEWARE ===================== */
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

/* ===================== ROUTES ===================== */
app.get("/", (req, res) => {
  res.status(200).send("Job Tracking API is running");
});

/* ===================== START SERVER ===================== */
const PORT = process.env.PORT || 5001;

const startServer = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Startup error:", err.message);
    process.exit(1);
  }
};

startServer();

