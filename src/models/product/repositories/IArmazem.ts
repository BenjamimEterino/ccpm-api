import { armazem, transferencia_produto } from "@prisma/client"

interface IArmazem {
    create(local: string, id_projecto: string): Promise<void>
    listAllArmazens(): Promise<armazem[]>
    getArmazemById(id_armazem: string): Promise<armazem | null>
    createTransferOrder(armazem_origem: string, armazem_destino: string, data: Date, requisicao_id: string): Promise<transferencia_produto>
    createTransferLines(id_transferencia: number, produtos: { product_id: string, quantidade: number }[]): Promise<void>
    listTransferencias(): Promise<transferencia_produto[]>
    getArmazemByProjectId(id_projecto: string): Promise<armazem | null>
 
}

export { IArmazem }