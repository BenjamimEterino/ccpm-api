import { Request, Response } from "express";
import { container } from "tsyringe";
import { ApproveRequisicaoUC } from "./ApproveRequsicaoUC";

class ApproveRequisicaoController{
    async handle(req: Request, res: Response) {
        const { id_requisicao } = req.params;

        const approveReqUC = container.resolve(ApproveRequisicaoUC)

        const requisicao = await approveReqUC.execute(id_requisicao)

        return res.status(200).json(requisicao)
    }
}

export {ApproveRequisicaoController}