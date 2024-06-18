import { inject, injectable } from "tsyringe";
import { ICategoriaProduct } from "../../repositories/IProduct";

@injectable()
class ListCategoriaProductUC {
    constructor(
        @inject("categoriaProductRepo")
        private categoriaProduct: ICategoriaProduct
    ) { }
    
    async execute() {
        const categoria_prod = await this.categoriaProduct.listCategoriaProduct()

        return categoria_prod
    }
}
export {ListCategoriaProductUC}