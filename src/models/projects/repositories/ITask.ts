import { tarefa } from "@prisma/client";

interface ITask {
    create(project_id: string, actividade: string): Promise<void>
    listActivitiesByProject(id_project: string): Promise<tarefa[]>
    getActivityById(id_tarefa: string): Promise<tarefa>
}

export { ITask }