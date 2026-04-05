import User from "./auth.model.js";
export class AuthRepository {
    
    addNewUser =async(email,password)=>{
        const checkUser = await User.findOne({email: email});
        if(checkUser){
            return ({message: "User already exists"});
        }
        const user = new User({ email, password });
        await user.save();
        return ({message: "User created successfully", user});
    }
}