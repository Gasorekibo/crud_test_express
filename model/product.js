import mongoose from 'mongoose';
const ProductSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required:false,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

const Product = mongoose.model('Product', ProductSchema);
export default Product;
