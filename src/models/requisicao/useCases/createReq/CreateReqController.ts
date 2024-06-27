import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateReqUC } from "./CreateReqUC";

class CreateReqController {
    async handle(req: Request, res: Response) {
        const { project_id, user_id, motivo, productsList } = req.body

        const requisicaoUC = container.resolve(CreateReqUC)

        await requisicaoUC.execute(project_id, user_id, motivo, productsList)

        return res.status(201).json({message: "Requisição criada"})
    }
}

export {CreateReqController}