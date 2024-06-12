import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListProdByIdUC } from "./ListProdByIdUC";

class ListProdByIdController{
    async handle(req: Request, res: Response) {
        const { id_produto } = req.params;

        const productUC = container.resolve(ListProdByIdUC)

        const product = productUC.execute(id_produto)

        return res.status(200).json(product)
    }
}

export {ListProdByIdController}