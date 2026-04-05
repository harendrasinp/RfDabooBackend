const register= async(req,res)=>{
    try{
        const {username,email,password}=await(req.body);
        const userExists=await User.findOne({email});
        if(userExists){
            return res.status(400).json({message:"user already exists"});
        }
    } catch (error) {
        return res.status(500).json({message:"internal server error"});

    }
}
export default {register};