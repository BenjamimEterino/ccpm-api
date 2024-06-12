import { funcionario } from "@prisma/client";
import prismaClient from "../../../../prisma";
import { IFuncionario } from "../IFuncionario";

class FuncionarioRepo implements IFuncionario {
    async create(categ_id: string, nome: string, morada: string, contacto: string): Promise<void> {
        await prismaClient.funcionario.create({
            data: {
                categ_id,
                nome,
                morada,
                contacto
            }
        })
    }
    async listFuncionarios(): Promise<funcionario[]> {
        const funcionarios = await prismaClient.funcionario.findMany();

        return funcionarios
    }
    async getFuncById(id_funcionario: string): Promise<funcionario> {
        const func = await prismaClient.funcionario.findFirst({
            where: {
                id_funcionario
            }
        })

        return func as funcionario
    }

}

export { FuncionarioRepo }