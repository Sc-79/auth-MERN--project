 import mongoose from "mongoose";
 const conncetDB = async ()=> {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`)

     } catch(err) {
        console.log("mongoDB connection error: ",err.message) // console.log(err)
        process.exit(1)   // Exit process with failure
    }

}
export default conncetDB