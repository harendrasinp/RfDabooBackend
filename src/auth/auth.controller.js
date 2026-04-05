import { AuthRepository } from "./auth.repository.js";

export default class AuthController {
    constructor() {
        this.authRepository = new AuthRepository();
    }

    newUser = async (req, res) => {  // <-- async here
        try {
            const { email, password } = req.body;
            const user = await this.authRepository.addNewUser(email, password);  // <-- await here
            res.json(user);  // Use res.json for proper JSON response
        } catch (error) {
            res.status(500).json({ message: "Server error", error: error.message });
        }
    }
}