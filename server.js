import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"

dotenv.config()

const app = express()
app.use(express.json())

/* ---------- Health Route (CRITICAL) ---------- */
app.get("/", (req, res) => {
  res.status(200).send("✅ Job Tracking Backend Live")
})

/* ---------- Error Handler ---------- */
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ message: err.message })
})

/* ---------- Start Server ---------- */
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

if (!PORT) throw new Error("PORT not set")
if (!MONGO_URI) throw new Error("MONGO_URI not set")

const start = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log("✅ MongoDB connected")

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running on port ${PORT}`)
    })
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()

