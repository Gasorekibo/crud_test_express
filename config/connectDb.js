import mongoose from 'mongoose';

export default async function connectDb  () {
    try {
      await mongoose.connect(process.env.MONGODB_URL);
      console.log("Database Connected Successfully");
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };
