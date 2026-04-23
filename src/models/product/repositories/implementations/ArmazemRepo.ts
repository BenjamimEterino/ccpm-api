import { armazem } from "@prisma/client";
import { IArmazem } from "../IArmazem";
import prisma from "../../../../prisma";

class ArmazenRepo implements IArmazem {
    async create(local: string): Promise<void> {
        await prisma.armazem.create({
            data: {
                local
            }
        })
    }
    async listAllArmazens(): Promise<armazem[]> {
        console.log("Listando armazéns...")
        return await prisma.armazem.findMany();
    }
    async getArmazemById(id_armazem: string): Promise<armazem | null> {
        return await prisma.armazem.findUnique({
            where: {
                id_armazem
            }
        });
    }
    
}

export { ArmazenRepo }