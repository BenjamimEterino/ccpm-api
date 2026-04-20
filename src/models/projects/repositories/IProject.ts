import { project } from "@prisma/client";
import { IProjectDTO } from "../dto/IProjectDTO";

interface IProject {
    create({ nome, orcamento, data_fim}: IProjectDTO): Promise<project>
    listProjects(): Promise<project[]>
    getProjectById(id_project: string): Promise<project>
    addResponsavelProject(id_project: string, id_funcionario: string): Promise<void>
}

export {IProject}