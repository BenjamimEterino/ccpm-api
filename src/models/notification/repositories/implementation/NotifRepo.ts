import { notification } from "@prisma/client";
import prismaClient from "../../../../prisma";
import { INotification } from "../INotification";

class NotifiRepo implements INotification {
    async create(user_id: string, mensagem: string): Promise<void> {
        await prismaClient.notification.create({
            data: {
                user_id,
                mensagem
            }
        })
    }
    async listAllNotifications(): Promise<notification[]> {
        const notifications = await prismaClient.notification.findMany()

        return notifications
    }
    async getNotByUserId(user_id: string): Promise<notification[]> {
        const notifications = await prismaClient.notification.findMany({
            where: {
                user_id
            }
        })

        return notifications
    }

}

export { NotifiRepo }