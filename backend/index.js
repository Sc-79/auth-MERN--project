import express from "express";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth.route.js";
import   connectDB   from "./db/connectDB.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
dotenv.config();
const PORT = process.env.PORT || 5000;
// allow us to parse incoming requests with JSON payloads
app.get("/", (req, res) => {
    res.send({
        message: "Hello World",});
});

app.use("/api/auth",authRoutes);
app.listen(PORT, () =>{
    connectDB ();
    console.log("Server started on port ", PORT);
});

//n6MA7jHZoD6B3SQy
// souravchongrey