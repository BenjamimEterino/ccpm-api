import 'reflect-metadata'
import express, { Request, Response } from 'express';
import './shared/container'
import { routes } from './routes';
import cors from 'cors'
import morgan from 'morgan';

const app = express();

const PORT: number = 3000;
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

app.use(routes)

app.listen(PORT, (): void => {
    console.log('SERVER IS UP ON PORT:', PORT);
});