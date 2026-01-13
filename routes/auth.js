import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/login", (req, res) => {
  const user = { userId: "123", email: "test@test.com" };

  const token = jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.json({ token });
});

export default router;

