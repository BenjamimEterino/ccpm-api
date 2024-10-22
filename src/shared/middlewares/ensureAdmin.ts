import { Request, Response, NextFunction } from "express";
import { usersRepo } from "../../models/user/repositories/implementations/UsersRepo";
import { AppError } from "../../errors/AppError";

export async function ensureAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const user_id = req.user.id_user;

  const userRepo = new usersRepo();

  const user = await userRepo.findUserById(user_id);

  if (user.role !== "admin") {
    throw new AppError("User is not admin", 401);
  }

  return next();
}
