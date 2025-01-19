import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://diesunabe:omSOv63W3ipYX030@cluster0.3l0ku.mongodb.net/nextMarketDataServerActions?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Success: Connected to MongoDB");
  } catch {
    console.log("Failure: Unconnected to MongoDB");
    throw new Error();
  }
};

export default connectDB;
