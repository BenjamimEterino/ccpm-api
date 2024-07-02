import { requisicao } from "@prisma/client"
import { ListProduct } from "../useCases/createReq/CreateReqUC"

interface IRequisicao {
    createRequisicao(project_id: string, user_id: string, motivo: string): Promise<requisicao>
    listRequisicoes(): Promise<requisicao[]>
    getByUserId(user_id: string): Promise<requisicao[]>
    addRequisicaoProduct(id_requisicao: string, productsList: ListProduct[]): Promise<void>
    getByProjectID(project_id: string): Promise<requisicao[]>
    approveReq(id_requisicao: string): Promise<requisicao>
    deliverReq(id_requisicao: string): Promise<requisicao>
}

export {IRequisicao}