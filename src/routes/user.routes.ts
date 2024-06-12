import { Router } from "express";
import { CreateUserController } from "../models/user/useCases/createUser/CreateUserController";
import { GetAllUsersController } from "../models/user/useCases/getAllUsers/GetAllUsersController";

const userRoutes = Router();

const createUser = new CreateUserController()
const getAllUsers = new GetAllUsersController()

userRoutes.post("/", createUser.handle);
userRoutes.get("/", getAllUsers.handle)

export {userRoutes}