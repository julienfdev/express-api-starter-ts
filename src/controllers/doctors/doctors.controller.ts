import { getDoctorsHandler } from "./handlers/get-doctors";

class DoctorsController {
  getDoctors = getDoctorsHandler;
}

export const doctorsController = new DoctorsController();
