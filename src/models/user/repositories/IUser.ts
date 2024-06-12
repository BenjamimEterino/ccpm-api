import { user } from '@prisma/client'

interface IUser {
    createUser(email: string, senha: string): Promise<user>
    listUsers(): Promise<user[]>
    findByEmail(email: String): Promise<user>
}

export {IUser}