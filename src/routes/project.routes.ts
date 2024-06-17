import { Router } from "express";
import { AddProjectController } from "../models/projects/useCases/addProjectUseCase/AddProjectController";
import { ListProjectsController } from "../models/projects/useCases/listProjects/ListProjectsController";
import { GetProjectByIdController } from "../models/projects/useCases/getProjectById/GetProjectByIdController";

const projectRouter = Router();

const addProject = new AddProjectController()
const listAllProjects = new ListProjectsController()
const getProjectById = new GetProjectByIdController()

projectRouter.post("/", addProject.handle);
projectRouter.get("/", listAllProjects.handle);
projectRouter.get("/:id_project", getProjectById.handle)

export { projectRouter }