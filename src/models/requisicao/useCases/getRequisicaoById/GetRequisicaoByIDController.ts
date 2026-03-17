import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetRequisicaoByIDUC } from "./GetRequisicaoByIDUC";

class GetRequisicaoByIDController {
    async handle(req: Request, res: Response) {
        const { id_requisicao } = req.params

        const getRequisicaoByIDUseCase = container.resolve(GetRequisicaoByIDUC)

        const requisicao = await getRequisicaoByIDUseCase.execute(id_requisicao)

        return res.status(200).json(requisicao)
    }
}

export { GetRequisicaoByIDController }