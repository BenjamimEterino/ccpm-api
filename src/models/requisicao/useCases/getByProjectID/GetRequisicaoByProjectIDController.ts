import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetByProjectIDUC } from "./GetByProjectIDUC";

class GetRequisicaoByProjectIDController{
    async handle(req: Request, res: Response) {
        const { project_id } = req.params;

        const getByProjectIDUC = container.resolve(GetByProjectIDUC)

        const requicioes = await getByProjectIDUC.execute(project_id)

        return res.status(200).json(requicioes)
    }
}

export {GetRequisicaoByProjectIDController}