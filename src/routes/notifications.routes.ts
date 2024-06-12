import { Router } from "express";
import { CreateNotifiController } from "../models/notification/useCase/createNotifi/CreateNotifiController";
import { GetAllNotifiController } from "../models/notification/useCase/getAllNotifi/GetAllNotifiController";
import { GetNotifiByUserController } from "../models/notification/useCase/getByUser/GetNotifiByUserController";

const notifiRoutes = Router();

const createNotifi = new CreateNotifiController()
const getAllNotifi = new GetAllNotifiController()
const getNotifiByUser = new GetNotifiByUserController()

notifiRoutes.post("/", createNotifi.handle)
notifiRoutes.get("/", getAllNotifi.handle)
notifiRoutes.get("/user", getNotifiByUser.handle)


export {notifiRoutes}