import mongoose from "mongoose";


const connectDB= async ()=>{
    if(mongoose.connection.readyState){
        return mongoose.connection;
    }
    return await mongoose.connect(process.env.MONGO_URI);
}
export default connectDB