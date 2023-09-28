import express from "express";
import Users from "../controller/users.js";

const router = express.Router();

// HTTP request
router.post("/contact/submit", Users);

export default router;
