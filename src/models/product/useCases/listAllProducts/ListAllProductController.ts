import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllProdUC } from "./ListAllProdUC";

class ListAllProductController {
    async handle(req: Request, res: Response) {

        const productUC = container.resolve(ListAllProdUC)

        const products = await productUC.execute()

        return res.status(200).json(products)
    }
}

export {ListAllProductController}