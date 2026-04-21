import { inject, injectable } from "tsyringe";
import { ITask } from "../../repositories/ITask";
import { AppError } from "../../../../errors/AppError";

@injectable()
class GetProjectTasksUC {
    constructor(
        @inject("taskRepo")
        private taskRepo: ITask
    ) { }

    async execute(id_project: string) {
        const tasks = await this.taskRepo.listActivitiesByProject(id_project);

        if (!tasks) {
            throw new AppError("No tasks found for this project.");
        }

        return tasks;
    }
}
export { GetProjectTasksUC }