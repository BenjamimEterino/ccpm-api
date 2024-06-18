import { Request, Response } from "express";
import { container } from "tsyringe";
import { AddCategoriaProductUC } from "./AddCategoriaProductUC";

class AddCategoriaProductController {
    async handle(req: Request, res: Response) {
        const { descricao } = req.body;

        const categoria_prodUC = container.resolve(AddCategoriaProductUC)

        await categoria_prodUC.execute(descricao)

        return res.status(201).json({message: "Categoria adicionada"})
    }
}

export {AddCategoriaProductController}