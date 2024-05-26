import mongoose from "mongoose";
const connectDb=async()=>{
    try {
        const connectionInsatnce=await mongoose.connect("mongodb://localhost:27017/bigohnotation");
        console.log(`\n Mongodb connected DB:${connectionInsatnce.connection.host}`);
    } catch (error) {
        console.log("MONGODB Connection Failed:",error);
        process.exit(1);
    }
}
export default connectDb;