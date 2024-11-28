import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MONGO DB SUCCESFULLY CONNECTED!! ${connectionInstance.Error}`);
    
    } catch (error) {
        console.error("MONGO DB CONNECTION FAILED: ", error);
        process.exit(1);
    }
}

export default connectDB