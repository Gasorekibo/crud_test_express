import Product from '../model/product.js';
import { v4 as uuidv4 } from 'uuid';

export const getProducts = async (req, res) => {
  try {
    const product = await Product.find();
    if (!product || product.length < 1)
      return res.status(404).json('No Products');
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addProduct = async (req, res) => {
  const { name, price, description } = req.body;
  try {
    const isProductExists = await Product.findOne({ name });
    if (isProductExists) return res.status(301).json('Product already Exists');
    const newProduct = await Product.create({
      id: uuidv4(),
      name,
      price,
      description,
    });
    if (newProduct) return res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

