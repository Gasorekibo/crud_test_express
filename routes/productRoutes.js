import express from "express";
import { addProduct, getOneProduct, getProducts, updateProduct } from "../controllers/productController.js";
const productRoute = express.Router();


productRoute.get("/", getProducts);
productRoute.post("/add", addProduct);
productRoute.get("/:id",getOneProduct);
productRoute.put("/:id",updateProduct);


export default productRoute;