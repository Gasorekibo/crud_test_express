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

export const getOneProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const isProductExists = await Product.findById(id);
    if (!isProductExists) return res.status(404).json('Product not found');
    return res.status(200).json(isProductExists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    if (!updatedProduct) return res.status(404).json('Product not found');
    return res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) return res.status(404).json('Product not found');
    return res.status(200).json('Product Deleted');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
