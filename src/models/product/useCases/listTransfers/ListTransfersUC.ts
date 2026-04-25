import { inject, injectable } from "tsyringe";
import { IArmazem } from "../../repositories/IArmazem";

@injectable()
class ListTransfersUC {
    constructor(
        @inject("armazemRepo")
        private armazemRepo: IArmazem
    ) { }

    async execute() {
        try {
            const transfers = await this.armazemRepo.listTransferencias()
            return transfers
        } catch (error) {
            console.error("Erro ao listar transferências:", error);
            throw new Error("Erro ao listar transferências");
        }
    }
}

export { ListTransfersUC }