import User from "./auth.model.js";

export class AuthRepository {

    async findByEmail(email) {
        return await User.findOne({ email });
    }

    async createUser(userData) {
        const newUser = new User(userData);
        return await newUser.save();
    }
}