import { categoria_prod, produto } from "@prisma/client"

interface IProduct {
    create(categoria_id: string, nome: string, marca: string, preco: number): Promise<void>
    listAllProducts(): Promise<produto[]>
    getProdById(id_produto: string): Promise<produto>
}

interface ICategoriaProduct {
    create(descricao: string): Promise<void>
    listCategoriaProduct(): Promise<categoria_prod>
}
export {IProduct, ICategoriaProduct}