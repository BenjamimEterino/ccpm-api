import { inject, injectable } from "tsyringe";
import { ICategoriaProduct } from "../../repositories/IProduct";
import { AppError } from "../../../../errors/AppError";

@injectable()
class AddCategoriaProductUC {
    constructor(
        @inject("categoriaProductRepo")
        private categoriaProductRepo: ICategoriaProduct
    ) { }
    
    async execute(descricao: string) {
        if (descricao == undefined) {
            throw new AppError("Erro ao adicionar")
        }
        await this.categoriaProductRepo.create(descricao)
    }
}

export {AddCategoriaProductUC}