import { inject, injectable } from "tsyringe";
import { ICategoria } from "../../reporitories/ICategoria";
import { AppError } from "../../../../errors/AppError";

@injectable()
class ListCateUC{
    constructor(
        @inject("catFuncRepo")
        private cateRepo: ICategoria
    ) { }
    
    async execute() {
        const categoria = await this.cateRepo.getAll()


        if (!categoria) {
            throw new AppError("Categoria não encontrada")
        }
        return categoria
    }
}

export {ListCateUC}