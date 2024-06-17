import { inject, injectable } from "tsyringe";
import { IUser } from "../../repositories/IUser";
import { AppError } from "../../../../errors/AppError";
import { compare } from "bcrypt";
import {sign} from 'jsonwebtoken'

interface IResponse {
    user: {
        id_user: string,
        email: string
        tipo_conta: string;
    },
    token: string
}
@injectable()
class AuthUserUC {
    constructor(
        @inject("userRepo")
        private userRepo: IUser
    ) { }
    
    async execute(email: string, senha: string) {
        const user = await this.userRepo.findByEmail(email);

        if (!user) {
            throw new AppError("Credenciais inválidas")
        }

        const passMatch = await compare(senha, user.senha)

        if (!passMatch) {
            throw new AppError("Credenciais inválidas")
        }

        const token = sign({}, "benjamim", {
            subject: user.id_user.toString(),
            expiresIn: "30d"
        })

        const tokenResponse: IResponse = {
            user: {
                id_user: user.id_user,
                email,
                tipo_conta: user.role as string
            },
            token
        }
        return tokenResponse
    }
}

export {AuthUserUC}