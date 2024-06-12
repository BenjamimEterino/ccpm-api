import { inject, injectable } from "tsyringe";
import { IUser } from "../../repositories/IUser";
import { AppError } from "../../../../errors/AppError";
import { hash } from "bcrypt";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("userRepo")
        private userRepo: IUser
        
    ) { }
    
    async execute(email: string, senha: string) {

        const userExists = await this.userRepo.findByEmail(email)

        if (userExists) {
            throw new AppError("User existe", 400)
        }

        senha == "" || senha == undefined ? senha = Math.floor(Math.random() * 65656585).toString() : senha == senha

        const hashedPassword = await hash(senha, 8)

        await this.userRepo.createUser(email, hashedPassword)
    }
}

export {CreateUserUseCase}