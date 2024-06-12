import { Router } from "express";
import { CreateProdController } from "../models/product/useCases/createProduct/CreateProdController";
import { ListAllProductController } from "../models/product/useCases/listAllProducts/ListAllProductController";
import { ListProdByIdController } from "../models/product/useCases/listProdById/ListProdByIdController";

const productRoutes = Router()

const createProd = new CreateProdController()
const getAllProd = new ListAllProductController()
const getProdById = new ListProdByIdController()

productRoutes.post("/", createProd.handle)
productRoutes.get("/", getAllProd.handle)
productRoutes.get("/id_produto", getProdById.handle)

export {productRoutes}