import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthUserUC } from "./AuthUserUC";

class AuthUserController {
    async handle(req: Request, res: Response) {
        const { email, senha } = req.body;

        const authUserUC = container.resolve(AuthUserUC)

        const tokenResponse = await authUserUC.execute(email, senha)

        return res.json(tokenResponse)
    }
}

export {AuthUserController}