import express from "express";
import cors from "cors";
import userRouter from "./src/auth/auth.router.js";
import connectDB from "./src/db_config/database.js";
const app=express();
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json());

app.use("/Api/auth",userRouter)

app.listen(4800,()=>{
    console.log("server is runing on port 4800");
    connectDB();
})

export default app;