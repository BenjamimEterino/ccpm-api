import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors/AppError";
import { verify } from "jsonwebtoken";
import { usersRepo } from "../../models/user/repositories/implementations/UsersRepo";

interface IPayload {
    sub: string
}
export async function ensureAuth(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;


    if (!authHeader) {
        throw new AppError("Missing token", 401);
        
    } 

    

    const [, token] = authHeader.split(" ");

    const { sub: user_id} = verify(token, "benjamim") as IPayload

    const userRepo = new usersRepo();


    const user = await userRepo.findUserById(user_id);



    if(!user) {
        throw new AppError("Invalid token", 401);
    }

    req.user = {
        id_user: user_id
    }

    next();

}