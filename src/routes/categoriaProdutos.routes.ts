import { Router } from "express";
import { ListCategoriaProductController } from "../models/product/useCases/listAllCategories/ListCategoriaProductController";
import { AddCategoriaProductController } from "../models/product/useCases/addCategory/AddCategoriaProductController";

const productCategoryRoutes = Router()

const addCategoriaProd = new AddCategoriaProductController()
const listCategoriaProd = new ListCategoriaProductController()

productCategoryRoutes.post("/", addCategoriaProd.handle)
productCategoryRoutes.get("/", listCategoriaProd.handle)

export {productCategoryRoutes}