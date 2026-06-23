import express from "express";
import { ContactUs, Feedback } from "../controllers/public.controller.js";

const router = express.Router();

router.post("/contact-us", ContactUs);
router.post("/feedback", Feedback);

export default router;
