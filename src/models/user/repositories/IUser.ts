import { user } from '@prisma/client'

interface IUser {
    createUser(email: string, senha: string, role: string): Promise<user>
    listUsers(): Promise<user[]>
    findByEmail(email: String): Promise<user>
    findUserById(id_user: string): Promise<user>
}

export {IUser}