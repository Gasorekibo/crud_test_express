import express from "express";
import { getProducts, addProduct, getOneProduct, updateProduct, deleteProduct } from "../controllers/productController.js";
const productRoute = express.Router();


productRoute.get("/", getProducts);
productRoute.post("/add", addProduct);
productRoute.get("/:id",getOneProduct);
productRoute.put("/:id",updateProduct);
productRoute.delete("/delete/:id",deleteProduct);

export default productRoute;