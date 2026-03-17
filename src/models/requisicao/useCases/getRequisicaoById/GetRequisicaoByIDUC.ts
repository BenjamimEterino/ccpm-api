import { inject, injectable } from "tsyringe";
import { IRequisicao } from "../../repositories/IRequisicao";
import { AppError } from "../../../../errors/AppError";


@injectable()
class GetRequisicaoByIDUC {
    constructor(
        @inject("requisicaoRepo")
        private reqRepo: IRequisicao
    ) { }

    async execute(id_requisicao: string) {
        const requisicao = await this.reqRepo.getRequisicaoById(id_requisicao)
        if (!requisicao) {
            throw new AppError("Requisição não encontrada")
        }

        return requisicao
    }
}

export { GetRequisicaoByIDUC }