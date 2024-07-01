import { Router } from "express";
import { CreateReqController } from "../models/requisicao/useCases/createReq/CreateReqController";
import { GetAllReqController } from "../models/requisicao/useCases/getAllReq/GetAllReqController";
import { GetReqByUserController } from "../models/requisicao/useCases/getReqByUserId/GetReqByUserController";
import { GetRequisicaoByProjectIDController } from "../models/requisicao/useCases/getByProjectID/GetRequisicaoByProjectIDController";
import { ApproveRequisicaoController } from "../models/requisicao/useCases/approveRequisicao/ApproveRequisicaoController";

const requisicaoRouter = Router();

const createReq = new CreateReqController()
const getAllReq = new GetAllReqController()
const getReqByUser = new GetReqByUserController()
const getReqByProject = new GetRequisicaoByProjectIDController()
const approveReq = new ApproveRequisicaoController()

requisicaoRouter.post("/", createReq.handle)
requisicaoRouter.get("/", getAllReq.handle)
requisicaoRouter.get("/user/:id", getReqByUser.handle)
requisicaoRouter.get("/project/:project_id", getReqByProject.handle)
requisicaoRouter.put("/approve/:id_requisicao", approveReq.handle)

export {requisicaoRouter}