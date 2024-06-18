import { Router } from "express";
import { CreateProdController } from "../models/product/useCases/createProduct/CreateProdController";
import { ListAllProductController } from "../models/product/useCases/listAllProducts/ListAllProductController";
import { ListProdByIdController } from "../models/product/useCases/listProdById/ListProdByIdController";
import { AddCategoriaProductController } from "../models/product/useCases/addCategory/AddCategoriaProductController";
import { ListCategoriaProductController } from "../models/product/useCases/listAllCategories/ListCategoriaProductController";

const productRoutes = Router()

const createProd = new CreateProdController()
const getAllProd = new ListAllProductController()
const getProdById = new ListProdByIdController()

const addCategoriaProd = new AddCategoriaProductController()
const listCategoriaProd = new ListCategoriaProductController()

productRoutes.post("/", createProd.handle)
productRoutes.get("/", getAllProd.handle)
productRoutes.get("/id_produto", getProdById.handle)

productRoutes.post("/categoria", addCategoriaProd.handle)
productRoutes.get("/categoria", listCategoriaProd.handle)

export {productRoutes}