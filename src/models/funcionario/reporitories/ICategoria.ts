import { categoria_func } from "@prisma/client";

interface ICategoria {
    create(descricao: string): Promise<void>
    getAll(): Promise<categoria_func[]>
    getCategoriaById(id: string): Promise<categoria_func>
}
export{ICategoria}