import { inject, injectable } from "tsyringe";
import { IFuncionario } from "../../reporitories/IFuncionario";
import { AppError } from "../../../../errors/AppError";


@injectable()
class GetFuncByIdUC {
    constructor(
        @inject("funcRepo")
        private funcUC: IFuncionario
    ) { }
    
    async execute(id: string) {
        const func = await this.funcUC.getFuncById(id)

        if (!func) {
            throw new AppError("Não encontrado")
        }

        return func
    }
}

export {GetFuncByIdUC}