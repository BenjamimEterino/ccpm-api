import { notification } from "@prisma/client";

interface INotification {
    create(user_id: string, mensagem: string): Promise<void>
    listAllNotifications(): Promise<notification[]>
    getNotByUserId(user_id: string): Promise<notification[]>
}

export {INotification}