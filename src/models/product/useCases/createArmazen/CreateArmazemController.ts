import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateArmazemUC } from "./CreateArmazemUC"

class CreateArmazemController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { local, id_projecto } = request.body
        const createArmazemUC = container.resolve(CreateArmazemUC)
        await createArmazemUC.execute(local, id_projecto)
        return response.status(201).json({ message: "Armazém criado com sucesso" })
    }

}

export { CreateArmazemController }