import mongoose from "mongoose";
import dev from './index.js'


const connectDB = async () => {
    try {
      await mongoose.connect(dev.db.url);
      console.log("connected to database");
    } catch (error) {
      console.log(error);
    }
  };

export default connectDB