import { inject, injectable } from "tsyringe";
import { IProduct } from "../../repositories/IProduct";

@injectable()
class CreateProdUC {
    constructor(
        @inject("productRepo")
        private productRepo: IProduct
    ) { }
    
    async execute(categoria_id: string, nome: string, marca: string, preco: number) {
        await this.productRepo.create(categoria_id, nome, marca, preco)
    }
}

export {CreateProdUC}