import express from 'express';
import dotenv from "dotenv"
import productRoute from "./routes/productRoutes.js"
import connectDb from "./config/connectDb.js"
dotenv.config();

const app = express();
const port = process.env.PORT || 3000
connectDb()
app.use(express.json());
app.use('/product', productRoute)
app.listen(port, () =>
  console.log(`Server started on Port ${port}`)
);
