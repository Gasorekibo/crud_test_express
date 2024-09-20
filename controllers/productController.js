import Product from '../model/product.js';

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

