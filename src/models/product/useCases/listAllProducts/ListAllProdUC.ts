import { inject, injectable } from "tsyringe";
import { IProduct } from "../../repositories/IProduct";

@injectable()
class ListAllProdUC  {
    constructor(
        @inject("productRepo")
        private productRepo: IProduct
    ) { }
    
    async execute() {
        const product = await this.productRepo.listAllProducts()

        return product
    }
}

export {ListAllProdUC}