import express from "express";
import cors from "cors";
import homeRouter from "./src/auth/auth.router.js";
import connectDB from "./src/db_config/database.js";
const app=express();
app.use(cors());
app.use(express.json());

app.use("/Api/Home",homeRouter)

app.listen(4800,()=>{
    console.log("server is runing on port 4800");
    connectDB();
})

export default app;