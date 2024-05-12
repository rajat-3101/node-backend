import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}}`,
    );
    console.log("\n mongodb connection successful", connection.connection);
  } catch (error) {
    console.log("connection error", error);
  }
};


export default connectDB