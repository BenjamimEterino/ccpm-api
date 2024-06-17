import { inject, injectable } from "tsyringe";
import { IRequisicao } from "../../repositories/IRequisicao";

@injectable()
class CreateReqUC {
    constructor(
        @inject("requisicaoRepo")
        private reqRepo: IRequisicao
    ) { }

    async execute(project_id: string, user_id: string, motivo: string) {
        await this.reqRepo.createRequisicao(project_id, user_id, motivo)
    }
}

export { CreateReqUC }