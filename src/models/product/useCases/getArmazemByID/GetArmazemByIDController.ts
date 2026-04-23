import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetArmazemByIDUC } from "./GetArmazemByIDUC";

class GetArmazemByIDController {
    async handle(req: Request, res: Response) {
        const { id_armazem } = req.params; 
        
        const getArmazemByIDUC = container.resolve(GetArmazemByIDUC)
        const armazem = await getArmazemByIDUC.execute(id_armazem)
        return res.status(200).json(armazem)
    }
}

export { GetArmazemByIDController }
