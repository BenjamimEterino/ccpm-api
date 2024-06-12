import { inject, injectable } from "tsyringe";
import { INotification } from "../../repositories/INotification";

@injectable()
class CreateNotifiUC {
    constructor(
        @inject("notifiRepo")
        private notifiRepo: INotification
    ) { }
    
    async execute(user_id: string, mensagem: string) {
        await this.notifiRepo.create(user_id, mensagem)
    }
}

export {CreateNotifiUC}