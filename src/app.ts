import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import MessageResponse from "./interfaces/MessageResponse";
import { doctorsRouter } from "./routes/doctors";

require("dotenv").config();

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/doctors', doctorsRouter)

app.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

export default app;
