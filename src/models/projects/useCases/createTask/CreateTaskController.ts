import { Request, Response } from "express";
import { CreateTaskUC } from "./CreateTaskUC";
import { container } from "tsyringe";

class CreateTaskController {
    async handle(request: Request, response: Response): Promise<any> {
        const { project_id, actividade } = request.body;

        const createTaskUC = container.resolve(CreateTaskUC);
        
        await createTaskUC.execute(project_id, actividade);
        return response.status(201).send();
    }
}
export { CreateTaskController };