import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";

class GetAllUsersController {
    async handle(req: Request, res: Response) {
        const getUserUseCase = container.resolve(GetAllUsersUseCase);

        const users = await getUserUseCase.handle();

        return res.status(200).json(users)
    }
}

export { GetAllUsersController }