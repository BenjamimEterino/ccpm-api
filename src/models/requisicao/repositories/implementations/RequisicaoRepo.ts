import { $Enums, requisicao } from "@prisma/client";
import { IRequisicao } from "../IRequisicao";
import prismaClient from "../../../../prisma";
import { ListProduct } from "../../useCases/createReq/CreateReqUC";

class RequisicaoRepo implements IRequisicao {
    async createRequisicao(project_id: string, user_id: string, motivo: string): Promise<requisicao> {
        const requisicao = await prismaClient.requisicao.create({
            data: {
                project_id,
                user_id,
                motivo
            }
        })

        return requisicao as requisicao
    }
    async listRequisicoes(): Promise<requisicao[]> {
        const requisicoes = await prismaClient.requisicao.findMany({
            include: {
                produto: true
            }
        })

        return requisicoes
    }
    async getByUserId(user_id: string): Promise<requisicao[]> {
        const requisicoes = await prismaClient.requisicao.findMany({
            where: {
            user_id
        }})

        return requisicoes
    }
    async addRequisicaoProduct(id_requisicao: string, productsList: ListProduct[]): Promise<void> {

        const requisicaoProdutoData = productsList.map(product => ({
            requisicao_id: id_requisicao,
            product_id: product.id_produto,
            quantidade: product.quantidade
        }))

        await prismaClient.requisicao_produto.createMany({
            data: requisicaoProdutoData
        })
    }
    async getByProjectID(project_id: string): Promise<requisicao[]> {
        const requisicoes = await prismaClient.requisicao.findMany({
            where: {
                project_id
            },
            include: {
                requisicao_produto: {
                    include: {
                        product: true
                    }
                }
            }
        })

        return requisicoes
    }
    async approveReq(id_requisicao: string): Promise<requisicao> {
        const requisicao = await prismaClient.requisicao.update({
            where: {
                id_requisicao
            },
            data: {
                status: "aceite"
            }
        })

        return requisicao
    }
    
}

export {RequisicaoRepo}