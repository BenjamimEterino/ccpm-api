import {Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllArmazemUC } from "./ListAllArmazemUC";

class ListAllArmazemController {
    async handle(request: Request, response: Response) {
        console.log("ListAllArmazemController: handle called")
        const listAllArmazemUC = container.resolve(ListAllArmazemUC)
        const armazemList = await listAllArmazemUC.execute()
        return response.status(200).json(armazemList)
    }
}

export { ListAllArmazemController }