import { Router } from "express";
import { AddProjectController } from "../models/projects/useCases/addProjectUseCase/AddProjectController";
import { ListProjectsController } from "../models/projects/useCases/listProjects/ListProjectsController";

const projectRouter = Router();

const addProject = new AddProjectController()
const listAllProjects = new ListProjectsController()

projectRouter.post("/", addProject.handle);
projectRouter.get("/", listAllProjects.handle);

export { projectRouter }