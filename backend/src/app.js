import express from "express";
import cors from "cors";
import mstRoutes from "./routes/mstRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", mstRoutes);

export default app;
