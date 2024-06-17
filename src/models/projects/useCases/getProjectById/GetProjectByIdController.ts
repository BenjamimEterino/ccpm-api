import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetProjectByIdUC } from "./GetProjectByIdUC";

class GetProjectByIdController{
    async handle(req: Request, res: Response) {
        const { id_project } = req.params;

        const getProjectUC = container.resolve(GetProjectByIdUC)

        const project = await getProjectUC.execute(id_project)

        return res.status(200).json(project)
    }
}

export {GetProjectByIdController}