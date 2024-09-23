import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";
import  { connectDB }  from "./db/connectDB.js";
import bodyParser from "body-parser";

const app = express();

dotenv.config();
app.use(bodyParser.json()); // Parses JSON requests
app.use(bodyParser.urlencoded({ extended: true })); // Parses URL-encoded requests
// parse incoming requests with JSON payloads
app.use(express.json());
const PORT = process.env.PORT || 5000;
// parse incoming requests with JSON payloads
// allow us to parse incoming requests with JSON payloads
app.post("/api/register", (req, res) => {
    console.log("Headers:", req.headers);
    console.log("Body:", req.body); // Check if this logs the body correctly
    res.json({ status: "ok" });
  });
  
  
app.use("/api/auth",authRoutes);
app.listen(PORT, () =>{
    connectDB ();
    console.log("Server started on port ", PORT);
});

//n6MA7jHZoD6B3SQy
// souravchongrey