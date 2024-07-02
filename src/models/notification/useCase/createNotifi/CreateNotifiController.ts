import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateNotifiUC } from "./CreateNotifiUC";

class CreateNotifiController {
    async handle(req: Request, res: Response) {
        const { user_id, mensagem } = req.body;

        const notifiUC = container.resolve(CreateNotifiUC)

        await notifiUC.execute(user_id, mensagem, '')

        return res.status(201).json({message: "Notificação criada"})
    }
}

export {CreateNotifiController}