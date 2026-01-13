import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";

const app = express();

console.log("BOOT: process.env.PORT =", process.env.PORT);
console.log("BOOT: process.env.MONGO_URI exists =", !!process.env.MONGO_URI);

app.get("/", (req, res) => {
  res.status(200).send("API alive");
});

const PORT = Number(process.env.PORT);

if (!PORT) {
  console.error("❌ PORT missing — Railway will 502");
  process.exit(1);
}

const start = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI missing");
    }

    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Mongo connected");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Listening on ${PORT}`);
    });
  } catch (err) {
    console.error("❌ FATAL STARTUP ERROR");
    console.error(err);
    process.exit(1);
  }
};

start();

