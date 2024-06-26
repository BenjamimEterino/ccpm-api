import { project } from "@prisma/client";
import { IProjectDTO } from "../../dto/IProjectDTO";
import { IProject } from "../IProject";
import prismaClient from "../../../../prisma";

class ProjectRepo implements IProject {
    async create({ user_id, nome, local, orcamento, data_inicio, data_fim }: IProjectDTO): Promise<void> {
        await prismaClient.project.create({
            data: {
                user_id,
                nome,
                local,
                orcamento,
                data_inicio,
                data_fim
            }
        })
    }
    async listProjects(): Promise<project[]> {
        const projects = await prismaClient.project.findMany()

        return projects
    }
    async getProjectById(id_project: string): Promise<project> {
        const project = await prismaClient.project.findFirst({
            where: {
                id_project
            }
        })

        return project as project
    }

}

export { ProjectRepo }