import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCategoriaProductUC } from "./ListCategoriaProductUC";

class ListCategoriaProductController {
    async handle(req: Request, res: Response) {
        const categoria_prodUC = container.resolve(ListCategoriaProductUC)

        const categoria_prod = await categoria_prodUC.execute()

        return res.status(200).json(categoria_prod)
    }
}

export {ListCategoriaProductController}