import dotenv from "dotenv";
dotenv.config();

import express from "express";
import "express-async-errors";
import mongoose from "mongoose";

import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
import fileUpload from "express-fileupload";

import connectDB from "./database/connectDB.js";
import authenticateUser from "./middleware/authentication.js";

// Routers
import authRouter from "./routes/authRoutes.js";
import jobRouter from "./routes/jobRoutes.js";

// Middleware
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";

const app = express();

/* ---------- Debug (keep this) ---------- */
console.log("PORT =", process.env.PORT);
console.log("MONGO_URI =", process.env.MONGO_URI ? "FOUND" : "MISSING");

/* ---------- Core Middleware ---------- */
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));
app.use(morgan("tiny"));

app.use(
  cors({
    origin: ["http://localhost:5173", "https://indago-job.netlify.app"],
    credentials: true,
  })
);

app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(fileUpload({ useTempFiles: true }));

/* ---------- Health Check (REQUIRED for Railway) ---------- */
app.get("/", (req, res) => {
  res.status(200).send("Job Tracking API is running");
});

/* ---------- Routes ---------- */
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobRouter);

/* ---------- Error Handling ---------- */
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

/* ---------- Start Server ---------- */
const PORT = process.env.PORT;

if (!PORT) {
  throw new Error("PORT is not defined (Railway should provide this)");
}

const start = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing");
    }

    await connectDB(process.env.MONGO_URI);

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Startup failed:", err.message);
    process.exit(1);
  }
};

start();

