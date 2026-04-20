import { inject, injectable } from "tsyringe";
import { IProject } from "../../repositories/IProject";
import { IProjectDTO } from "../../dto/IProjectDTO";

@injectable()
class AddProjectUseCase {
    constructor(
        @inject("projectRepo")
        private projectRepo: IProject
    ) { }

    async execute({ nome, orcamento, data_fim, id_funcionario }: IProjectDTO) {
        try {
            const project: any = await this.projectRepo.create({ nome, orcamento, data_fim })

            console.log(project)

            await this.projectRepo.addResponsavelProject(project.id_project, id_funcionario as string)
        }
        catch (err) {
            console.log(err)
        }

       
    }
}

export { AddProjectUseCase }