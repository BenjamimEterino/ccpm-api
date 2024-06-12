import { funcionario } from "@prisma/client";

interface IFuncionario {
    create(categ_id: string, nome: string, morada: string, contacto: string): Promise<void>
    listFuncionarios(): Promise<funcionario[]>
}

export {IFuncionario}