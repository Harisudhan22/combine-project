import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();



const connectDB = async () => {
  // const mongoUri = process.env.MONGODB_URL);

  // if (!mongoUri) {
  //   console.error("MongoDB connection string is missing. Set MONGODB_URL in your .env file.");
  //   return;
  // }

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected With MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};

export default connectDB;
