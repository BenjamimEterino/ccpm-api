import { inject, injectable } from "tsyringe";
import { IFuncionario } from "../../reporitories/IFuncionario";

@injectable()
class CreateFuncUC {
    constructor(
        @inject("funcRepo")
        private funcRepo: IFuncionario
    ) { }
    
    async execute(categ_id: string, nome: string, morada: string, contacto: string) {
        await this.funcRepo.create(categ_id, nome, morada, contacto)
    }
}

export {CreateFuncUC}