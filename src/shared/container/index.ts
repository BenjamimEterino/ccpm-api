import { container } from "tsyringe";
import { IUser } from "../../models/user/repositories/IUser";
import { usersRepo } from "../../models/user/repositories/implementations/UsersRepo";
import { IProject } from "../../models/projects/repositories/IProject";
import { ProjectRepo } from "../../models/projects/repositories/implementations/ProjectRepo";
import { ICategoria } from "../../models/funcionario/reporitories/ICategoria";
import { CategoriaRepo } from "../../models/funcionario/reporitories/implementations/CategoriaRepo";
import { IFuncionario } from "../../models/funcionario/reporitories/IFuncionario";
import { FuncionarioRepo } from "../../models/funcionario/reporitories/implementations/FuncionarioRepo";

container.registerSingleton<IUser>(
    "userRepo",
    usersRepo
)
container.registerSingleton<IProject>(
    "projectRepo",
    ProjectRepo
)
container.registerSingleton<ICategoria>(
    "catFuncRepo",
    CategoriaRepo
)
container.registerSingleton<IFuncionario>(
    "funcRepo",
    FuncionarioRepo
)