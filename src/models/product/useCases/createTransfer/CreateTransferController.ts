import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateTransferUC } from "./CreateTransferUC";

class CreateTransferController {
    async handle(request: Request, response: Response): Promise<void> {

        const { armazem_origem, armazem_destino, data, produtos, requisicao_id } = request.body;

        const createTransferUC = container.resolve(CreateTransferUC);

        try {
            const transfer = await createTransferUC.execute(armazem_origem, armazem_destino, data, produtos, requisicao_id);
            response.status(201).json(transfer);
        } catch (error) {
            console.error("Erro ao criar transferência:", error);
            response.status(500).json({ message: "Erro ao criar transferência" });
        }
    }
}

export { CreateTransferController }