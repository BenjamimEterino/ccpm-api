import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetFuncByCategoryUC } from "./GetFuncByCategoryUC";

class GetFuncByCategoryController {
    async handle(req: Request, res: Response) {
        const { categ_id } = req.params;

        const funcUC = container.resolve(GetFuncByCategoryUC)

        const func = await funcUC.execute(categ_id)

        return res.status(200).json(func)

    }
}

export {GetFuncByCategoryController}