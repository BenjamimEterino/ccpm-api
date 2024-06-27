import { inject, injectable } from "tsyringe";
import { IRequisicao } from "../../repositories/IRequisicao";

export type ListProduct = {
    id_produto: string,
    quantidade: number
}

@injectable()
class CreateReqUC {
    constructor(
        @inject("requisicaoRepo")
        private reqRepo: IRequisicao
    ) { }

    async execute(project_id: string, user_id: string, motivo: string, productsList: ListProduct[]) {
        const requisicao = await this.reqRepo.createRequisicao(project_id, '8699a102-6881-4a17-90ec-ec582e3dbf71', motivo)
        
        await this.reqRepo.addRequisicaoProduct(requisicao.id_requisicao, productsList)
    }
}

export { CreateReqUC }