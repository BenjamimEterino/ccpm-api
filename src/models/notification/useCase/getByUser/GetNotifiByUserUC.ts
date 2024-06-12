import { inject, injectable } from "tsyringe";
import { INotification } from "../../repositories/INotification";

@injectable()
class GetNotifiByUserUC {
    constructor(
        @inject("notifiRepo")
        private notifiRepo: INotification
    ) { }
    
    async execute(user_id: string) {
        const notifications = await this.notifiRepo.getNotByUserId(user_id)

        return notifications
    }
}

export {GetNotifiByUserUC}