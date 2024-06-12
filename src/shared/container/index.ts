import { container } from "tsyringe";
import { IUser } from "../../models/user/repositories/IUser";
import { usersRepo } from "../../models/user/repositories/implementations/UsersRepo";
import { IProject } from "../../models/projects/repositories/IProject";
import { ProjectRepo } from "../../models/projects/repositories/implementations/ProjectRepo";

container.registerSingleton<IUser>(
    "userRepo",
    usersRepo
)
container.registerSingleton<IProject>(
    "projectRepo",
    ProjectRepo
)