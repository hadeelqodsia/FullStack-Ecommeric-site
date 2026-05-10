import express from "express";
import {
  getCart,
  addToCart,
  removeFromCart,
} from "../controllers/CartController.js";

import { protect } from "../Middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getCart);
router.post("/", protect, addToCart);
router.delete("/:id", protect, removeFromCart);

export default router;