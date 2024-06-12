import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProdUC } from "./CreateProdUC";

class CreateProdController {
    async handle(req: Request, res: Response) {
        const { categoria_id, nome, marca, preco } = req.body;

        const prodUC = container.resolve(CreateProdUC)

        await prodUC.execute(categoria_id, nome, marca, preco)

        return res.status(200).json({message: "produto adicionado"})
    }
}

export {CreateProdController}