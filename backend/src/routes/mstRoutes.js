import express from "express";
import { getMST } from "../controllers/mstController.js";

const router = express.Router();
router.post("/mst", getMST);

export default router;

