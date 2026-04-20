import { project } from "@prisma/client";
import { IProjectDTO } from "../../dto/IProjectDTO";
import { IProject } from "../IProject";
import prismaClient from "../../../../prisma";

class ProjectRepo implements IProject {
   async addResponsavelProject(id_project: string, id_funcionario: string): Promise<void> {
       await prismaClient.responsavel_projecto.create({
           data: {
               project_id: id_project,
               funcionario_id: id_funcionario
           }
       })
    }
    async create({  nome, orcamento,  data_fim }: IProjectDTO): Promise<project> {
        const project = await prismaClient.project.create({
            data: {
                nome,
                orcamento,
                data_fim: new Date(data_fim as Date)
            }
        })
        return project
    }
    async listProjects(): Promise<project[]> {
        const projects = await prismaClient.project.findMany({
            include: {
                responsavelProjectos: {
                    include: {
                        funcionario: true
                    }
                },
                tarefas: true,
                client: true,
                funcionario: true
            }
        })

        return projects
    }
    async getProjectById(id_project: string): Promise<project> {
        const project = await prismaClient.project.findFirst({
            where: {
                id_project
            },
            include: {
                responsavelProjectos: {
                    include: {
                        funcionario: true
                    }
                },
                tarefas: true,
                client: true,
                funcionario: true
            }
        })

        return project as project
    }

}

export { ProjectRepo }