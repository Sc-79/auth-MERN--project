import express from "express";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';

import  conncetDB  from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const PORT = process.env.PORT || 5000;
dotenv.config();
// allow us to parse incoming requests with JSON payloads


app.use("/api/auth",authRoutes);
conncetDB()
app.listen(PORT, () =>
    console.log("Server started on port ", PORT),

);
// EcRh0fg6UjUkqhiB
// souravchongrey