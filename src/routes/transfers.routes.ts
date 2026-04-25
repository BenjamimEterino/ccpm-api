import { Router } from "express";
import { CreateTransferController } from "../models/product/useCases/createTransfer/CreateTransferController";
import { ListTransfersController } from "../models/product/useCases/listTransfers/ListTransfersController";

const transfersRouter = Router();

const createTransferController = new CreateTransferController();
const listTransfers = new ListTransfersController();


transfersRouter.post("/", createTransferController.handle);
transfersRouter.get("/", listTransfers.handle);

export { transfersRouter }