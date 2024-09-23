import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("mongo_uri:", process.env.MONGO_URI);
    
    // Await the connection promise to ensure it resolves before accessing properties
    const conn = await mongoose.connect(process.env.MONGO_URI);
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
