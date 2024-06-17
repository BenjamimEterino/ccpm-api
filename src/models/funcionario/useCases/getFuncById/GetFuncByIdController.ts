import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetFuncByIdUC } from "./GetFuncByIdUC";

class GetFuncByIdController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const funcUC = container.resolve(GetFuncByIdUC)

        const func = await funcUC.execute(id)

        return res.status(200).json(func)
    }
}

export {GetFuncByIdController}