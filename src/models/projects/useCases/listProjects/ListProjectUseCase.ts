import { inject, injectable } from "tsyringe";
import { IProject } from "../../repositories/IProject";
import { AppError } from "../../../../errors/AppError";

@injectable()
class ListProjectUseCase {
    constructor(
        @inject("projectRepo")
        private projectRepo: IProject
    ) { }

    async execute() {
        const projects = await this.projectRepo.listProjects()

        if (!projects) {
            throw new AppError("No projects found")
        }

        return projects
    }
}

export {ListProjectUseCase}