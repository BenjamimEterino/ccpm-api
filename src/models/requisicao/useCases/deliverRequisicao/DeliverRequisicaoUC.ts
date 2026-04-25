import { inject, injectable } from "tsyringe";
import { IRequisicao } from "../../repositories/IRequisicao";
import { IArmazem } from "../../../product/repositories/IArmazem";

@injectable()
class DeliverRequisicaoUC {
    constructor(
        @inject("requisicaoRepo")
        private requisicaoRepo: IRequisicao,
        @inject("armazemRepo")
        private armazemRepo: IArmazem
    ) { }

    async execute(id_requisicao: string) {
        const requisicao = await this.requisicaoRepo.deliverReq(id_requisicao)

        // const notifiUC = container.resolve(CreateNotifiUC)

        // await notifiUC.execute('8699a102-6881-4a17-90ec-ec582e3dbf71', new Date(requisicao.data), requisicao.status)

        return requisicao
    }
}

export { DeliverRequisicaoUC }