import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController{
    async handle(req: Request, res: Response) {
        const { email, senha } = req.body;

        const createUserUseCase = container.resolve(CreateUserUseCase);

        await createUserUseCase.execute(email, senha);

        return res.status(201).json({message: "Conta criada"})
    }
}

export {CreateUserController}