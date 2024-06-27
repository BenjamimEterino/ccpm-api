import { inject, injectable } from "tsyringe";
import { IRequisicao } from "../../repositories/IRequisicao";
import { AppError } from "../../../../errors/AppError";

@injectable()
class GetByProjectIDUC {
    constructor(
        @inject('requisicaoRepo')
        private requisicaoRepo: IRequisicao
    ) { }
    
    async execute(project_id: string) {
        const requisicoes = await this.requisicaoRepo.getByProjectID(project_id)

        if (!requisicoes) {
            throw new AppError("Sem requisições")
        }

        return requisicoes
    }
}

export {GetByProjectIDUC}