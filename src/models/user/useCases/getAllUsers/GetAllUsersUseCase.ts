import { inject, injectable } from "tsyringe";
import { IUser } from "../../repositories/IUser";
import { AppError } from "../../../../errors/AppError";

@injectable()
class GetAllUsersUseCase {
    constructor(
        @inject("userRepo")
        private userRepo: IUser
    ) { }
    
    async handle() {
        const users = await this.userRepo.listUsers();

        if (!users) {
            throw new AppError("Lista vazia", 404)
        }

        return users
    }
}

export {GetAllUsersUseCase}