import { verifyJWT } from "../utils/jwt.js";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "Authentication invalid" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = verifyJWT(token);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Authentication invalid" });
  }
};

export default authMiddleware;

