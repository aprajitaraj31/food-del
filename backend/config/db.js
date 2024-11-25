import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Attempt to connect to the MongoDB database
    await mongoose.connect('mongodb://localhost:27017/food-del')
    console.log("DB Connected");
  } catch (error) {
    // If an error occurs during connection, log the error
    console.error("Error connecting to the database:", error.message);
    process.exit(1); // Exit the process with a failure code
  }
};
