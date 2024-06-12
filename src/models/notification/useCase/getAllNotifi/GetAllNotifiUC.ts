import { inject, injectable } from "tsyringe";
import { INotification } from "../../repositories/INotification";

@injectable()
class GetAllNotifiUC {
    constructor(
        @inject("notifiRepo")
        private notifiRepo: INotification
    ) { }
    
    async execute() {
        const notifications = await this.notifiRepo.listAllNotifications()

        return notifications
    }
}
export {GetAllNotifiUC}