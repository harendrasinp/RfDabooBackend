import express from "express";

const homeController=express.Router();

homeController.get("/",(req,res)=>{
    res.send("welcome to the home page");
})

export default homeController;