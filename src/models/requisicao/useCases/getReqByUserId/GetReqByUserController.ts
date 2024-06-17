import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetReqByUserUC } from "./GetReqByUserUC";

class GetReqByUserController {
    async handle(req: Request, res: Response) {
        const { id } = req.params

        const reqUC = container.resolve(GetReqByUserUC)

        const requisicoes = await reqUC.execute(id)

        return res.status(200).json(requisicoes)
    }
}

export { GetReqByUserController }