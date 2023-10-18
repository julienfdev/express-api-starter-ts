import { RequestHandler } from "express";
import { doctorsModel } from "../../../models/doctors";

export const getDoctorsHandler: RequestHandler = (req, res) => {
  const { firstname } = req.query;

  res.status(200).json(doctorsModel.findAllDoctors());
};
