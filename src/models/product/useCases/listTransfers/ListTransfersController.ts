import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListTransfersUC } from "./ListTransfersUC";

class ListTransfersController {
    async handle(request: Request, response: Response) {

        const listTransfersUC = container.resolve(ListTransfersUC);

        try {
            const transfers = await listTransfersUC.execute();
            response.status(200).json(transfers);
        } catch (error) {
            console.error("Erro ao listar transferências:", error);
            response.status(500).json({ message: "Erro ao listar transferências" });
        }
    }
}
export { ListTransfersController }