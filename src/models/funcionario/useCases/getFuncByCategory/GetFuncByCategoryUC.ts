import { inject, injectable } from "tsyringe";
import { IFuncionario } from "../../reporitories/IFuncionario";
import { AppError } from "../../../../errors/AppError";

@injectable()
class GetFuncByCategoryUC {
    constructor(
        @inject("funcRepo")
        private funcUC: IFuncionario
    ) { }

    async execute(categ_id: string) {
        const func = await this.funcUC.getFuncByCategId(categ_id)
        if (!func) {
            throw new AppError("Não encontrado")
        }

        return func
    }
}

export {GetFuncByCategoryUC}