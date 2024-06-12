import { inject, injectable } from "tsyringe";
import { IProduct } from "../../repositories/IProduct";

@injectable()
class ListProdByIdUC {
    constructor(
        @inject("productRepo")
        private productRepo: IProduct
    ) { }
    
    async execute(id_produto: string) {
        const product = await this.productRepo.getProdById(id_produto)

        return product
    }
}

export {ListProdByIdUC}