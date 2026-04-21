import { Request, Response } from "express";
import { GetProjectTasksUC } from "./GetProjectTasksUC";
import { container } from "tsyringe";

class GetProjectTasksController {
    async handle(req: Request, res: Response) {
        const { id_project } = req.params;
        const getProjectTasksUC = container.resolve(GetProjectTasksUC);

        try {
            const tasks = await getProjectTasksUC.execute(id_project);
            return res.json(tasks);
        } catch (error) {
            return res.status(404).json({ error: error });
        }
    }
}

export { GetProjectTasksController };