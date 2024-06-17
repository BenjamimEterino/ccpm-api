import { inject, injectable } from "tsyringe";
import { IRequisicao } from "../../repositories/IRequisicao";
import { AppError } from "../../../../errors/AppError";

@injectable()
class GetAllReqUC {
    constructor(
        @inject("requisicaoRepo")
        private reqRepo: IRequisicao
    ) { }
    
    async execute() {
        const req = await this.reqRepo.listRequisicoes()

        if (!req) {
            throw new AppError("Sem requisições")
        }

        return req;
    }
}

export {GetAllReqUC}