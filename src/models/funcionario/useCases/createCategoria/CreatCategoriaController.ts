import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCategoriaUseCase } from "./CreateCategoriaUseCase";

class CreateCategoriaController {
    async handle(req: Request, res: Response) {
        const { descricao } = req.body;

        const createCategoriaUseCase = container.resolve(CreateCategoriaUseCase)

        await createCategoriaUseCase.execute(descricao)

        return res.status(201).json({message: "Categoria adicionada"})
    }
}

export {CreateCategoriaController}