import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { AppError } from "../../../../errors/AppError";

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { email, senha, role } = req.body;

        const createUserUseCase = container.resolve(CreateUserUseCase);

        try {
            await createUserUseCase.execute(email, senha, role);
        } catch (error) {
            throw new AppError(error as unknown as string, 401)
        }

        return res.status(201).json({ message: "Conta criada" })
    }
}

export { CreateUserController }