import { inject, injectable } from "tsyringe";
import { IRequisicao } from "../../repositories/IRequisicao";
import { AppError } from "../../../../errors/AppError";

@injectable()
class GetReqByUserUC {
    constructor(
        @inject("requisicaoRepo")
        private reqRepo: IRequisicao
    ) { }

    async execute(user_id: string) {
        const requisicoes = await this.reqRepo.getByUserId(user_id)

        if (!requisicoes) {
            throw new AppError("Sem requisições")
        }

        return requisicoes
    }
}

export {GetReqByUserUC}