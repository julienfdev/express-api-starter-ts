import { mock } from "node:test";

enum JobType {
  Ophtalmo = "ophtalmo",
  Generaliste = "generaliste",
  Chirurgien = "chirurgien",
  NeuroChir = "neuro-chir",
}

interface Doctor {
  id: string;
  firstname: string;
  lastname: string;
  job: JobType;
}

const doctor: Doctor = {
  id: "lkjsdaflksfdjklfsad",
  firstname: "Lucas",
  lastname: "DULIN",
  job: JobType.Chirurgien,
};

const mockData: Doctor[] = [
  {
    id: "lkjsdaflksfdjklfsad",
    firstname: "Lucas",
    lastname: "DULIN",
    job: JobType.Chirurgien,
  },
  {
    id: "lkjsdaflksfdjklfsad",
    firstname: "Lucas",
    lastname: "DEUXIEMELUCAS",
    job: JobType.Chirurgien,
  },
  {
    id: "ceciestunid",
    firstname: "Enzo",
    lastname: "PARRIEL",
    job: JobType.NeuroChir,
  },
  {
    id: "ceciestunautreid",
    firstname: "Etienne",
    lastname: "LOPEZ",
    job: JobType.Generaliste,
  },
];

class DoctorModel {
  private db: Doctor[];

  constructor(db: Doctor[]) {
    this.db = db;
  }

  findAllDoctors = () => [...this.db];
  findOneDoctor = (id: string) => this.db.find((doctor) => doctor.id === id);
  deleteOneDoctor(id: string) {
    const doctorIndex = this.db.findIndex((doctor) => doctor.id === id);

    if (doctorIndex > -1) {
      return this.db.splice(doctorIndex, 1);
    }
    return null;
  }
}

export const doctorsModel = new DoctorModel(mockData);
