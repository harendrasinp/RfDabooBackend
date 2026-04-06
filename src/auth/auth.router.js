import express from "express";
import AuthController from "./auth.controller.js";

const userRouter=express.Router();

const authController=new AuthController();

userRouter.post("/register", authController.register);

export default userRouter;