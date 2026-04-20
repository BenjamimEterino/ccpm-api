import { project } from "@prisma/client";
import { IProjectDTO } from "../dto/IProjectDTO";

interface IProject {
    create({ nome, orcamento, data_fim}: IProjectDTO): Promise<void>
    listProjects(): Promise<project[]>
    getProjectById(id_project: string): Promise<project>
}

export {IProject}