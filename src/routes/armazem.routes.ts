import { Router } from "express";
import { CreateArmazemController } from "../models/product/useCases/createArmazen/CreateArmazemController";
import { ListAllArmazemController } from "../models/product/useCases/listAllArmazem/ListAllArmazenController";
import { GetArmazemByIDController } from "../models/product/useCases/getArmazemByID/GetArmazemByIDController";

const armazemRouter = Router()

const createArmazem = new CreateArmazemController()
const listAllArmazem = new ListAllArmazemController()
const getArmazemById = new GetArmazemByIDController()

armazemRouter.post("/", createArmazem.handle)
armazemRouter.get("/", listAllArmazem.handle)
armazemRouter.get("/:id_armazem", getArmazemById.handle)

export {armazemRouter}