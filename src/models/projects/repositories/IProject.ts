import { project } from "@prisma/client";
import { IProjectDTO } from "../dto/IProjectDTO";

interface IProject {
    create({user_id, nome, local, orcamento, data_inicio, data_fim}: IProjectDTO): Promise<void>
    listProjects(): Promise<project[]>
}

export {IProject}