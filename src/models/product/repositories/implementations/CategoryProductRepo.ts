import { categoria_prod } from "@prisma/client";
import prismaClient from "../../../../prisma";
import { ICategoriaProduct } from "../IProduct";

class CategoryProductRepo implements ICategoriaProduct {
    async create(descricao: string): Promise<void> {
        await prismaClient.categoria_prod.create({
            data: {
                descricao
            }
        })
    }
    async listCategoriaProduct(): Promise<categoria_prod[]> {
        const categoria_prod = await prismaClient.categoria_prod.findMany()

        return categoria_prod
    }

}

export { CategoryProductRepo }