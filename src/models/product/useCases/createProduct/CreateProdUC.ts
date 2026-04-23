import { inject, injectable } from "tsyringe";
import { IProduct } from "../../repositories/IProduct";

@injectable()
class CreateProdUC {
    constructor(
        @inject("productRepo")
        private productRepo: IProduct
    ) { }
    
    async execute(categoria_id: string, nome: string, preco: number) {
        await this.productRepo.create(categoria_id, nome, preco)
    }
}

export {CreateProdUC}