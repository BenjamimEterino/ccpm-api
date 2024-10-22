import { Router } from "express";
import { CreateUserController } from "../models/user/useCases/createUser/CreateUserController";
import { GetAllUsersController } from "../models/user/useCases/getAllUsers/GetAllUsersController";
import { AuthUserController } from "../models/user/useCases/authUser/AuthUserController";
import { ensureAdmin } from "../shared/middlewares/ensureAdmin";
import { ensureAuth } from "../shared/middlewares/ensureAuth";

const userRoutes = Router();

const createUser = new CreateUserController()
const getAllUsers = new GetAllUsersController()
const authUser = new AuthUserController()

userRoutes.post("/", ensureAuth, ensureAdmin, createUser.handle);
userRoutes.post("/login", authUser.handle)
userRoutes.get("/", getAllUsers.handle)

export {userRoutes}