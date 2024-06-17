import { requisicao } from "@prisma/client"

interface IRequisicao {
    createRequisicao(project_id: string, user_id: string, motivo: string): Promise<void>
    listRequisicoes(): Promise<requisicao[]>
    getByUserId(user_id: string): Promise<requisicao[]>
}

export {IRequisicao}