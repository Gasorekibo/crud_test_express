import express from "express";
import { addProduct, getProducts } from "../controllers/productController.js";
const productRoute = express.Router();


productRoute.get("/", getProducts);
productRoute.post("/add", addProduct);


export default productRoute;