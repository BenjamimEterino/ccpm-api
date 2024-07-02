import { inject, injectable } from "tsyringe";
import { INotification } from "../../repositories/INotification";

@injectable()
class CreateNotifiUC {
    constructor(
        @inject("notifiRepo")
        private notifiRepo: INotification
    ) { }

    async execute(user_id: string, requisicaoDate: Date, requisicaoStatus: string) {

        const msg = `A sua requisição de ${requisicaoDate.toLocaleString("pt")} encontra-se no estado ${requisicaoStatus}`
        await this.notifiRepo.create(user_id, msg)
    }
}

export { CreateNotifiUC }