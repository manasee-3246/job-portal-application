import express from "express";
import {getJobs,addSampleJobs} from "../controllers/jobController.js";
const router=express.Router();
router.get("/",getJobs);
router.post("/add-sample",addSampleJobs);
export default router;