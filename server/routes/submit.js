import { express } from "express";
import { users } from "../controller/users.js";

const router = express.Router();

// HTTP request
router.post("/contact/submit", users);

export default router;
