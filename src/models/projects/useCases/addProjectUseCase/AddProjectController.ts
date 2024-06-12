import { Request, Response } from "express";
import { container } from "tsyringe";
import { AddProjectUseCase } from "./AddProjectUseCase";

class AddProjectController {
    async handle(req: Request, res: Response) {
        const { user_id, nome, local, orcamento, data_inicio, data_fim } = req.body;

        const addProjectUC = container.resolve(AddProjectUseCase);

        await addProjectUC.execute({ user_id, nome, local, orcamento, data_inicio, data_fim })

        return res.status(201).json({ message: "Added project" })
    }
}
export { AddProjectController }