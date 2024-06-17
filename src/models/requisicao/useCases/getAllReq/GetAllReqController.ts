import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllReqUC } from "./GetAllReqUC";

class GetAllReqController {
    async handle(req: Request, res: Response) {
        const reqUC = container.resolve(GetAllReqUC)
        
        const requisicoes = await reqUC.execute()

        return res.status(200).json(requisicoes)
    }
}

export {GetAllReqController}