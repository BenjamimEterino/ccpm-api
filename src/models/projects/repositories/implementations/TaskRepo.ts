import { tarefa } from "@prisma/client";
import { ITask } from "../ITask";
import prismaClient from "../../../../prisma";

class TaskRepo implements ITask {
    async create(project_id: string, actividade: string): Promise<void> {
        await prismaClient.tarefa.create({
            data: {
                project_id,
                actividade
            }
        });

    }
    async listActivitiesByProject(id_project: string): Promise<tarefa[]> {
        return await prismaClient.tarefa.findMany({
            where: {
                project_id: id_project
            }
        });
    }
    async getActivityById(id_tarefa: string): Promise<tarefa> {
        return await prismaClient.tarefa.findFirst({
            where: {
                id_tarefa
            },
            include: {
                project: true
            }
        }) as tarefa;
    }

}

export { TaskRepo }