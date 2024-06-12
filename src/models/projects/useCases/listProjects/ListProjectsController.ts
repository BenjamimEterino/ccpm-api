import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListProjectUseCase } from "./ListProjectUseCase";

class ListProjectsController {
    async handle(req: Request, res: Response) {
        const projectUD = container.resolve(ListProjectUseCase)

        const project = await projectUD.execute()

        return res.status(200).json(project)
    }
}

export { ListProjectsController }