import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeliverRequisicaoUC } from "./DeliverRequisicaoUC";

class DeliverRequisicaoController{
    async handle(req: Request, res: Response) {
        const { id_requisicao } = req.params;

        const deliverReqUC = container.resolve(DeliverRequisicaoUC)

        const requisicao = await deliverReqUC.execute(id_requisicao)

        return res.status(200).json(requisicao)
    }
}

export {DeliverRequisicaoController}