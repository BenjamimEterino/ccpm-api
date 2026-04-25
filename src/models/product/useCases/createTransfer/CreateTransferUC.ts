import { inject, injectable } from "tsyringe";
import { IArmazem } from "../../repositories/IArmazem";
import { AppError } from "../../../../errors/AppError";

@injectable()
class CreateTransferUC {
    constructor(
        @inject("armazemRepo")
        private armazemRepo: IArmazem
    ) { }

    async execute(armazem_origem: string, armazem_destino: string, data: Date, produtos: { product_id: string, quantidade: number }[], requisicao_id: string) {

        try {
            const transfer = await this.armazemRepo.createTransferOrder(armazem_origem, armazem_destino, data, requisicao_id)
            await this.armazemRepo.createTransferLines(transfer.id_transferencia, produtos)
            return transfer  
        } catch (error) {
            console.error("Erro ao criar transferência:", error);
            throw new AppError("Erro ao criar transferência");
        }
      
    }
}

export { CreateTransferUC }