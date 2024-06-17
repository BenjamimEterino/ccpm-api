import { Router } from "express";
import { CreateUserController } from "../models/user/useCases/createUser/CreateUserController";
import { GetAllUsersController } from "../models/user/useCases/getAllUsers/GetAllUsersController";
import { AuthUserController } from "../models/user/useCases/authUser/AuthUserController";

const userRoutes = Router();

const createUser = new CreateUserController()
const getAllUsers = new GetAllUsersController()
const authUser = new AuthUserController()

userRoutes.post("/", createUser.handle);
userRoutes.post("/login", authUser.handle)
userRoutes.get("/", getAllUsers.handle)

export {userRoutes}