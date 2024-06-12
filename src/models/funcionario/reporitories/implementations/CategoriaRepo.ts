import { categoria_func } from "@prisma/client";
import prismaClient from "../../../../prisma";
import { ICategoria } from "../ICategoria";

class CategoriaRepo implements ICategoria {
    async create(descricao: string): Promise<void> {
        await prismaClient.categoria_func.create({
            data: {
                descricao
            }
        })
    }
    async getAll(): Promise<categoria_func[]> {
        const categorias = await prismaClient.categoria_func.findMany()

        return categorias
    }
    async getCategoriaById(id_categoria_func: string): Promise<categoria_func> {
        const categorias = await prismaClient.categoria_func.findFirst({
            where: {
                id_categoria_func
            }
        })
        return categorias as categoria_func
    }

}

export {CategoriaRepo}