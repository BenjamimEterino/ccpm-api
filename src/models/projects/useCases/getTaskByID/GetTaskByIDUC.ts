import { inject, injectable } from "tsyringe";
import { TaskRepo } from "../../repositories/implementations/TaskRepo";
import { AppError } from "../../../../errors/AppError";

@injectable()
class GetTaskByIDUC {
    constructor(
        @inject("taskRepo")
        private taskRepo: TaskRepo
    ) { }

    async execute(id_tarefa: string) {
        const task = await this.taskRepo.getActivityById(id_tarefa);

        if (!task) {
            throw new AppError("Tarefa não encontrada");
        }
        return task;
    }
}
export { GetTaskByIDUC }