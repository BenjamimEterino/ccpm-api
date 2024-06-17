import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors/AppError";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../../modules/users/repositories/implementations/UsersRepository";

interface IPayload {
    sub: string
}
export async function ensureAuth(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        throw new AppError("Missing token", 401);
    }
    
    const [, token] = authHeader.split(" ");

    const { sub: user_id} = verify(token, "cb0a6659946720f4d8a829399dae7c43") as IPayload

    const userRepo = new UsersRepository();

    const user = userRepo.findById(user_id);

    if(!user) {
        throw new AppError("Invalid token", 401);
    }

    req.user = {
        id: user_id
    }

    next();

}