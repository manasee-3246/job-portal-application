import express from "express";
import auth from "../middleware/authmiddleware.js";
import upload from "../middleware/uploadMiddleware.js";
import {applyJob,myApplications}from "../controllers/applicationController.js";
const router = express.Router();
router.post("/apply",auth,upload.single("resume"),applyJob);
router.get("/my-applications", auth, myApplications);
export default router;