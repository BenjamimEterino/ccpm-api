import 'reflect-metadata'
import express, { Request, Response } from 'express';
import './shared/container'
import { routes } from './routes';

const app = express();

const PORT: number = 3000;

app.use(express.json())
app.use(routes)

app.listen(PORT, (): void => {
    console.log('SERVER IS UP ON PORT:', PORT);
});