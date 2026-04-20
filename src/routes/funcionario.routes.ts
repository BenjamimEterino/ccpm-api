import { Router } from "express";
import { CreateFuncController } from "../models/funcionario/useCases/createFuncionário/CreateFuncController";
import { ListAllFuncController } from "../models/funcionario/useCases/listAllFunc/ListAllFuncController";
import { GetFuncByIdController } from "../models/funcionario/useCases/getFuncById/GetFuncByIdController";
import { GetFuncByCategoryController } from "../models/funcionario/useCases/getFuncByCategory/GetFuncByCategoryController";

const funcRoutes = Router()

const createFunc = new CreateFuncController()
const getAllFunc = new ListAllFuncController()
const getFuncById = new GetFuncByIdController()
const getFuncByCategory = new GetFuncByCategoryController()

funcRoutes.post("/", createFunc.handle)
funcRoutes.get("/", getAllFunc.handle)
funcRoutes.get("/:id", getFuncById.handle)
funcRoutes.get("/category/:categ_id", getFuncByCategory.handle)

export {funcRoutes}