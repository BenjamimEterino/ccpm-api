import { inject, injectable } from "tsyringe";
import { IFuncionario } from "../../reporitories/IFuncionario";
import { AppError } from "../../../../errors/AppError";


@injectable()
class ListAllFuncUC {
    constructor(
        @inject("funcRepo")
        private funcRepo: IFuncionario
    ) { }
    
    async execute() {
        const func = await this.funcRepo.listFuncionarios()

        if (!func) {
            throw new AppError("Sem funcionários")
        }

        return func
    }
}

export {ListAllFuncUC}