import { inject, injectable } from "tsyringe";
import { IProject } from "../../repositories/IProject";
import { AppError } from "../../../../errors/AppError";

@injectable()
class GetProjectByIdUC {
    constructor(
        @inject("projectRepo")
        private projectRepo: IProject
    ) { }
    
    async execute(id_project: string) {
        const project = await this.projectRepo.getProjectById(id_project)

        if (!project) {
            throw new AppError("Projecto não encontrado")
        }

        return project
    }
}

export {GetProjectByIdUC}