declare namespace Express {
    export interface Request {
        user: {
            id_user: string
        },
        file: {
            originalname: string,
            filename: string
        }
    }
}