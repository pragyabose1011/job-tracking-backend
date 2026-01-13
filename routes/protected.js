import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/", (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({
      msg: "You are authorized",
      user: decoded,
    });
  } catch (error) {
    res.status(401).json({ msg: "Invalid token" });
  }
});

export default router;

