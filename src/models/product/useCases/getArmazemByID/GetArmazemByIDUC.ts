import { inject, injectable } from "tsyringe";
import { IArmazem } from "../../repositories/IArmazem";
import { AppError } from "../../../../errors/AppError";

@injectable()
class GetArmazemByIDUC {
    constructor(
        @inject("armazemRepo")
        private armazemRepo: IArmazem
    ) {}
    async execute(id_armazem: string) {
        const armazem = await this.armazemRepo.getArmazemById(id_armazem)

        if(!armazem) {
            throw new AppError("Armazém não encontrado")
        }
        return armazem;
    }   
}

export { GetArmazemByIDUC }