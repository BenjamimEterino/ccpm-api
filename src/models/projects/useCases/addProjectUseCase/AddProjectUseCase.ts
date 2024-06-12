import { inject, injectable } from "tsyringe";
import { IProject } from "../../repositories/IProject";
import { IProjectDTO } from "../../dto/IProjectDTO";

@injectable()
class AddProjectUseCase {
    constructor(
        @inject("projectRepo")
        private projectRepo: IProject
    ) { }

    async execute({ user_id, nome, local, orcamento, data_inicio, data_fim }: IProjectDTO) {
        await this.projectRepo.create({ user_id, nome, local, orcamento, data_inicio, data_fim })
    }
}

export { AddProjectUseCase }