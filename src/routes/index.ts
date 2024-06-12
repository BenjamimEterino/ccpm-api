import { Request, Response, Router } from "express";
import { userRoutes } from "./user.routes";
import { projectRouter } from "./project.routes";

const routes = Router()


routes.get("/", (req: Request, res: Response) => {
    res.status(200).json({message: "API running"})
})

routes.use("/user", userRoutes)
routes.use("/project", projectRouter)

export {routes}