import express from "express";
import cors from "cors";
import homeController from "./src/auth/auth.controller.js";

const app=express();
app.use(cors());
app.use(express.json());

app.use("/Api/Home",homeController)

app.listen(4800,()=>{
    console.log("server is runing on port 4800");
})

export default app;