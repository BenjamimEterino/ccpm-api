import { inject, injectable } from "tsyringe";
import { IRequisicao } from "../../repositories/IRequisicao";

@injectable()
class ApproveRequisicaoUC {
    constructor(
        @inject("requisicaoRepo")
        private requisicaoRepo: IRequisicao
    ) { }
    
    async execute(id_requisicao: string) {
        const requisicao = await this.requisicaoRepo.approveReq(id_requisicao)

        return requisicao
    }
}
export {ApproveRequisicaoUC}