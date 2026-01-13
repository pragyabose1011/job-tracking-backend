import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth.js";

import protectedRouter from "./routes/protected.js";

const app = express();

/* ---------- Middleware ---------- */
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));
app.use(morgan("tiny"));

app.use("/api/auth", authRouter);

app.use("/api/protected", protectedRouter);

/* ---------- Health Check ---------- */
app.get("/", (req, res) => {
  res.status(200).send("Job Tracking API is running");
});

/* ---------- Start Server ---------- */
const PORT = process.env.PORT || 8080;

(async function start() {
  console.log("PORT =", PORT);
  console.log("MONGO_URI =", process.env.MONGO_URI ? "FOUND" : "MISSING");

  if (!process.env.MONGO_URI) {
    console.error("❌ MONGO_URI missing at startup");
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Startup failed:", err.message);
    process.exit(1);
  }
})();

