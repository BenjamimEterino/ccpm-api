import { armazem, transferencia_produto } from "@prisma/client";
import { IArmazem } from "../IArmazem";
import prisma from "../../../../prisma";

class ArmazenRepo implements IArmazem {
    async create(local: string, id_projecto: string): Promise<void> {
        await prisma.armazem.create({
            data: {
                local,
                id_projecto: id_projecto || null
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
    async createTransferOrder(armazem_origem: string, armazem_destino: string, data: Date, requisicao_id: string): Promise<transferencia_produto> {
       return await prisma.transferencia_produto.create({
            data: {
                armazem_origem,
                armazem_destino,
                data: data? new Date(data): new Date(),
                requisicao_id
            }
        })
    }
    async createTransferLines(id_transferencia: number, produtos: { product_id: string; quantidade: number; }[]): Promise<void> {
        const transferLinesData = produtos.map(produto => ({
            id_transferencia,
            product_id: produto.product_id,
            quantidade: produto.quantidade
        }));
        await prisma.transferencia_linhas.createMany({
            data: transferLinesData
        });
    }
   
    async listTransferencias(): Promise<transferencia_produto[]> {
        return await prisma.transferencia_produto.findMany({
            include: {
                transferenciaLinhas: {
                    include: {
                        product: true
                    }
                },
            }
        });
    }
    async getArmazemByProjectId(id_projecto: string): Promise<armazem | null> {
        return await prisma.armazem.findFirst({
            where: {
                id_projecto
            }
        });
    }
}

export { ArmazenRepo }