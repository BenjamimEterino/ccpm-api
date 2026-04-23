import { Response, Router } from "express";
import { userRoutes } from "./user.routes";
import { projectRouter } from "./project.routes";
import { funcRoutes } from "./funcionario.routes";
import { notifiRoutes } from "./notifications.routes";
import { productRoutes } from "./product.routes";
import { requisicaoRouter } from "./requisicoes.routes";
import {armazemRouter} from "./armazem.routes";
import { productCategoryRoutes } from "./categoriaProdutos.routes";

const routes = Router()


routes.get("/", (res: Response) => {
    res.status(200).json({ message: "API running" })
})

routes.use("/user", userRoutes)
routes.use("/project", projectRouter)
routes.use("/funcionario", funcRoutes)
routes.use("/notification", notifiRoutes)
routes.use("/product", productRoutes)
routes.use("/requisicao", requisicaoRouter)
routes.use("/armazem", armazemRouter)
routes.use("/categoriaProduto", productCategoryRoutes)

export { routes }