import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"; 
import studentRoutes from "./routes/student.js";
dotenv.config(); 
const app = express();



app.use(express.json({ limit: "20mb" })); 
app.use(express.urlencoded({ limit: "20mb", extended: true })); 
app.use(cors());
app.use("/student", studentRoutes);
const CONNECTION_URL = process.env.MONGO_URI ;
// console.log(CONNECTION_URL)
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL).then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error}........ did not connect: ${error.message}`));


