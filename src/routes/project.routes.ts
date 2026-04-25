import { Router } from "express";
import { AddProjectController } from "../models/projects/useCases/createProject/AddProjectController";
import { ListProjectsController } from "../models/projects/useCases/listProjects/ListProjectsController";
import { GetProjectByIdController } from "../models/projects/useCases/getProjectById/GetProjectByIdController";
import { CreateTaskController } from "../models/projects/useCases/createTask/CreateTaskController";
import { GetProjectTasksController } from "../models/projects/useCases/getProjectTasks/GetProjectTasksController";
import { GetTaskByIDController } from "../models/projects/useCases/getTaskByID/GetTaskByIDController";

const projectRouter = Router();

const addProject = new AddProjectController()
const listAllProjects = new ListProjectsController()
const getProjectById = new GetProjectByIdController()
const createTask = new CreateTaskController()
const getProjectTasks = new GetProjectTasksController()
const getTaskByID = new GetTaskByIDController()

projectRouter.post("/", addProject.handle);
projectRouter.get("/", listAllProjects.handle);
projectRouter.get("/:id_project", getProjectById.handle)
projectRouter.post("/task", createTask.handle)
projectRouter.get("/:id_project/tasks", getProjectTasks.handle)
projectRouter.get("/task/:id_tarefa", getTaskByID.handle)

export { projectRouter }