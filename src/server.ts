import 'reflect-metadata'
import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express';
import './shared/container'
import { routes } from './routes';
import { AppError } from './errors/AppError';
import cors from 'cors'
import morgan from 'morgan';

const app = express();

const PORT: number = 3000;
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

app.use(routes)

app.use(
    (err: Error, req: Request, res: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return res.status(err.statusCode).json({
                message: err.message
            })
        }

        return res.status(500).json({
            status: "error",
            message: `Erro do servidor - ${err.message}`
        })
    }
)

app.listen(PORT, (): void => {
    console.log('SERVER IS UP ON PORT:', PORT);
});