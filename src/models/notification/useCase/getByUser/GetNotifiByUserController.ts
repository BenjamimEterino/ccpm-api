import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetNotifiByUserUC } from "./GetNotifiByUserUC";

class GetNotifiByUserController {
    async handle(req: Request, res: Response) {
        const { user_id } = req.body;

        const notifiUC = container.resolve(GetNotifiByUserUC)

        const notifications = notifiUC.execute(user_id)

        return res.status(200).json(notifications)
    }
}

export {GetNotifiByUserController}