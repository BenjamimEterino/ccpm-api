import { inject, injectable } from "tsyringe";
import { IArmazem } from "../../repositories/IArmazem";
import { AppError } from "../../../../errors/AppError";

@injectable()
class CreateArmazemUC {
    constructor(
        @inject("armazemRepo")
        private armazemRepo: IArmazem
    ) {}

    async execute(local: string, id_projecto: string): Promise<void> {
        const armazenExists = await this.armazemRepo.getArmazemById(local)

        if(armazenExists) {
            throw new AppError("Já existe um armazém com esse local")
        }

        await this.armazemRepo.create(local, id_projecto)
    }
}

export { CreateArmazemUC }