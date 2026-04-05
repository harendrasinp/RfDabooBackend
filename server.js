import app from "./index.js";

app.get("/",(req,res)=>{
    res.send("welcome to my server");
})