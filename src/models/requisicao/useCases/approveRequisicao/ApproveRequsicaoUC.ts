import { container, inject, injectable } from "tsyringe";
import { IRequisicao } from "../../repositories/IRequisicao";
import { CreateNotifiUC } from "../../../notification/useCase/createNotifi/CreateNotifiUC";

@injectable()
class ApproveRequisicaoUC {
    constructor(
        @inject("requisicaoRepo")
        private requisicaoRepo: IRequisicao
    ) { }
    
    async execute(id_requisicao: string) {
        const requisicao = await this.requisicaoRepo.approveReq(id_requisicao)

        const notifiUC = container.resolve(CreateNotifiUC)

        await notifiUC.execute('8699a102-6881-4a17-90ec-ec582e3dbf71', new Date(requisicao.data), requisicao.status)
        
        return requisicao
    }
}
export {ApproveRequisicaoUC}