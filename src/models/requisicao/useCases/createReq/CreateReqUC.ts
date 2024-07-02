import { container, inject, injectable } from "tsyringe";
import { IRequisicao } from "../../repositories/IRequisicao";
import { INotification } from "../../../notification/repositories/INotification";
import { CreateNotifiUC } from "../../../notification/useCase/createNotifi/CreateNotifiUC";

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

        const createNotifiUC = container.resolve(CreateNotifiUC)

        await createNotifiUC.execute('8699a102-6881-4a17-90ec-ec582e3dbf71', new Date(requisicao.data), requisicao.status.toString())
    }
}

export { CreateReqUC }