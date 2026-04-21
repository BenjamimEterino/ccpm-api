import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetTaskByIDUC } from "./GetTaskByIDUC";

class GetTaskByIDController {
    async handle(req: Request, res: Response) {
        const { id_tarefa } = req.params;
        const getTaskByIDUC = container.resolve(GetTaskByIDUC);
        const task = await getTaskByIDUC.execute(id_tarefa);
        return res.json(task);
    }
}

export { GetTaskByIDController }