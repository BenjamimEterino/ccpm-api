import { $Enums, requisicao } from "@prisma/client";
import { IRequisicao } from "./IRequisicao";
import prismaClient from "../../../prisma";

class RequisicaoRepo implements IRequisicao {
    async createRequisicao(project_id: string, user_id: string, motivo: string): Promise<void> {
        await prismaClient.requisicao.create({
            data: {
                project_id,
                user_id,
                motivo
            }
        })
    }
    async listRequisicoes(): Promise<requisicao[]> {
        const requisicoes = await prismaClient.requisicao.findMany()

        return requisicoes
    }
    async getByUserId(user_id: string): Promise<requisicao[]> {
        const requisicoes = await prismaClient.requisicao.findMany({
            where: {
            user_id
        }})

        return requisicoes
    }
    
}

export {RequisicaoRepo}