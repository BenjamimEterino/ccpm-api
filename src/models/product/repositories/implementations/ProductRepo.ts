import { produto } from "@prisma/client";
import { IProduct } from "../IProduct";
import prismaClient from "../../../../prisma";

class ProductRepo implements IProduct {
    async create(categoria_id: string, nome: string, marca: string, preco: number): Promise<void> {
        await prismaClient.produto.create({
            data: {
                categoria_id,
                nome,
                marca,
                preco
            }
        })
    }
   async  listAllProducts(): Promise<produto[]> {
        const product = await prismaClient.produto.findMany()

        return product
    }
   async getProdById(id_produto: string): Promise<produto> {
       const product = await prismaClient.produto.findFirst({
           where: {
                id_produto
            }
        })

        return product as produto
    }

}
export {ProductRepo}