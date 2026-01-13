import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import "express-async-errors"

// Load env FIRST
dotenv.config()

/* -------------------- App -------------------- */
const app = express()

/* -------------------- Middleware -------------------- */
app.use(express.json())

/* -------------------- Routes -------------------- */
app.get("/", (req, res) => {
  res.status(200).send("🚀 Job Tracking API is running")
})

/* -------------------- Error Handler -------------------- */
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  })
})

/* -------------------- DB + Server -------------------- */
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

if (!MONGO_URI) {
  throw new Error("❌ MONGO_URI is missing in environment variables")
}

const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log("✅ MongoDB connected")

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`)
    })
  } catch (error) {
    console.error("❌ Failed to start server:", error)
    process.exit(1)
  }
}

startServer()

