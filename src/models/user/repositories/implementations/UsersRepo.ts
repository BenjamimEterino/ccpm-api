import {    $Enums, user } from "@prisma/client";
import { IUser } from "../IUser";
import prismaClient from "../../../../prisma";



class usersRepo implements IUser{
    createUser(email: string, senha: string): Promise<user> {
        const user = prismaClient.user.create({
            data: {
                email,
                senha
            }
        })

        return user
    }
    async listUsers(): Promise<user[]> {
        const users = await prismaClient.user.findMany()
        
        return users
    }
    async findByEmail(email: string): Promise<user> {
        const user = await prismaClient.user.findFirst({
            where: {email}
        })

        return user as user
    }
    async getUserById(id_user: string): Promise<user> {
        const user = await prismaClient.user.findFirst({
            where: {id_user}
        })

        return user as user
    }
}

export {usersRepo}