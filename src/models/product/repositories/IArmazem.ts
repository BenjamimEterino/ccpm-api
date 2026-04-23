import { armazem } from "@prisma/client"

interface IArmazem {
    create(local: string): Promise<void>
    listAllArmazens(): Promise<armazem[]>
    getArmazemById(id_armazem: string): Promise<armazem | null>
}

export { IArmazem }