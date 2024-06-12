import { container } from "tsyringe";
import { IUser } from "../../models/user/repositories/IUser";
import { usersRepo } from "../../models/user/repositories/implementations/UsersRepo";

container.registerSingleton<IUser>(
    "userRepo",
    usersRepo
)