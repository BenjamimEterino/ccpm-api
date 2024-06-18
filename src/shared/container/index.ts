import { container } from "tsyringe";
import { IUser } from "../../models/user/repositories/IUser";
import { usersRepo } from "../../models/user/repositories/implementations/UsersRepo";
import { IProject } from "../../models/projects/repositories/IProject";
import { ProjectRepo } from "../../models/projects/repositories/implementations/ProjectRepo";
import { ICategoria } from "../../models/funcionario/reporitories/ICategoria";
import { CategoriaRepo } from "../../models/funcionario/reporitories/implementations/CategoriaRepo";
import { IFuncionario } from "../../models/funcionario/reporitories/IFuncionario";
import { FuncionarioRepo } from "../../models/funcionario/reporitories/implementations/FuncionarioRepo";
import { INotification } from "../../models/notification/repositories/INotification";
import { NotifiRepo } from "../../models/notification/repositories/implementation/NotifRepo";
import { ICategoriaProduct, IProduct } from "../../models/product/repositories/IProduct";
import { ProductRepo } from "../../models/product/repositories/implementations/ProductRepo";
import { IRequisicao } from "../../models/requisicao/repositories/IRequisicao";
import { RequisicaoRepo } from "../../models/requisicao/repositories/RequisicaoRepo";
import { CategoryProductRepo } from "../../models/product/repositories/implementations/CategoryProductRepo";

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
container.registerSingleton<INotification>(
    "notifiRepo",
    NotifiRepo
)
container.registerSingleton<IProduct>(
    "productRepo",
    ProductRepo
)
container.registerSingleton<IRequisicao>(
    "requisicaoRepo",
    RequisicaoRepo
)
container.registerSingleton<ICategoriaProduct>(
    "categoriaProductRepo",
    CategoryProductRepo
)