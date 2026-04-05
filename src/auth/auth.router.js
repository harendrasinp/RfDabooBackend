import express from "express";
import AuthController from "./auth.controller.js";

const homeRouter=express.Router();
const authController=new AuthController();

homeRouter.post("/",(req,res)=>{
    authController.newUser(req,res)
})

export default homeRouter;