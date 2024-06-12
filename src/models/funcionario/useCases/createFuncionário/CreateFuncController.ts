import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateFuncUC } from "./CreateFuncUC";

class CreateFuncController {
    async handle(req: Request, res: Response) {
        const {categ_id, nome, morada, contacto } = req.body;

        const createFuncUC = container.resolve(CreateFuncUC);

        await createFuncUC.execute(categ_id, nome, morada, contacto)

        return res.status(201).json({message: "Funcionário adicionado"})
    }
}

export { CreateFuncController }
