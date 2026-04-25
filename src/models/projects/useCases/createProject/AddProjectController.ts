import { Request, Response } from "express";
import { container } from "tsyringe";
import { AddProjectUseCase } from "./AddProjectUseCase";

class AddProjectController {
    async handle(req: Request, res: Response) {
        const { nome, orcamento, data_fim, id_funcionario } = req.body;

        // console.log(nome, orcamento, data_fim, id_funcionario)

        const addProjectUC = container.resolve(AddProjectUseCase);

        await addProjectUC.execute({ nome, orcamento: parseInt(orcamento), data_fim, id_funcionario })

        return res.status(201).json({ message: "Added project" })
    }
}
export { AddProjectController }