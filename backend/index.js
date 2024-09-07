import express from "express";
import dotenv from "dotenv";
import  conncetDB  from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";
const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();
app.get("/", (req, res)=>{
    res.send("Hello Sourav")
})
app.use("/api/auth",authRoutes);


conncetDB()
app.listen(PORT, () =>
    console.log("Server started on port ", PORT),

);
// EcRh0fg6UjUkqhiB
// souravchongrey