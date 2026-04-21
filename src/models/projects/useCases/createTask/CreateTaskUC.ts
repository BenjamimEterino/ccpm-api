import { inject, injectable } from "tsyringe";
import { ITask } from "../../repositories/ITask";

@injectable()
class CreateTaskUC {
    constructor(
        @inject("taskRepo")
        private taskRepo: ITask
    ) { }

    async execute(project_id: string, actividade: string): Promise<void> {
        await this.taskRepo.create(project_id, actividade);
    }
}
export { CreateTaskUC }
