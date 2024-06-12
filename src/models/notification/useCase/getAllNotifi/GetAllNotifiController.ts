import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllNotifiUC } from "./GetAllNotifiUC";

class GetAllNotifiController {
    async handle(req: Request, res: Response) {
        const notifiUC = container.resolve(GetAllNotifiUC)

        const notification = notifiUC.execute()

        return res.status(200).json(notification)
    }
}

export { GetAllNotifiController }