import { inject, injectable } from "tsyringe";
import { IArmazem } from "../../repositories/IArmazem";

@injectable()
class ListAllArmazemUC {

    constructor(
        @inject("armazemRepo")
        private armazemRepo: IArmazem
    ) { }

    async execute() {
        const armazemList = await this.armazemRepo.listAllArmazens()
        
        return armazemList;
    }
}

export { ListAllArmazemUC }