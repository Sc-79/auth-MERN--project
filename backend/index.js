import express from "express";
import dotenv from "dotenv";
import  conncetDB  from "./db/connectDB.js";
const app = express();
dotenv.config();
app.get("/", (req, res)=>{
    res.send("Hello Sourav")
})



conncetDB()
app.listen(5000, () =>
    console.log("Server started on port 5000"),

);
// EcRh0fg6UjUkqhiB
// souravchongrey