import express from "express";
import { doctorsController } from "../controllers/doctors/doctors.controller";

export const doctorsRouter = express.Router();

doctorsRouter.get("/", doctorsController.getDoctors);