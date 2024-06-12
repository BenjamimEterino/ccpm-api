import { Router } from "express";
import { CreateFuncController } from "../models/funcionario/useCases/createFuncionário/CreateFuncController";

const funcRoutes = Router()

const createFunc = new CreateFuncController()

funcRoutes.post("/", createFunc.handle)

export {funcRoutes}