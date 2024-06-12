import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllFuncUC } from "./ListAllFuncUC";

class ListAllFuncController {
    async handle(req: Request, res: Response) {

        const funcUC = container.resolve(ListAllFuncUC);

        const func = await funcUC.execute()

        return res.status(200).json(func)
    }
}

export {ListAllFuncController}