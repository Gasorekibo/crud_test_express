import express from "express";
import { addProduct, getOneProduct, getProducts } from "../controllers/productController.js";
const productRoute = express.Router();


productRoute.get("/", getProducts);
productRoute.post("/add", addProduct);
productRoute.get("/:id",getOneProduct);


export default productRoute;