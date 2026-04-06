import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AuthRepository } from "./auth.repository.js";

export default class AuthController {

    constructor() {
        this.authRepository = new AuthRepository();
    }
// ----------------------------------------Register method added----------------------------------------
    register = async (req, res) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({
                    success: false,
                    message: "Email and password are required"
                });
            }

            // check user exist
            const existingUser = await this.authRepository.findByEmail(email);

            if (existingUser) {
                return res.status(200).json({
                    success: false,
                    message: "User already exists"
                });
            }

            // hash password
            const hashedPassword = await bcrypt.hash(password, 10);

            // save user
            const user = await this.authRepository.createUser({
                email,
                password: hashedPassword
            });

            return res.status(201).json({
                success: true,
                message: "User registered successfully",
                data: {
                    id: user._id,
                    email: user.email
                }
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error.message
            });
        }
    };
// ----------------------------------------Login method added----------------------------------------
    login = async (req, res) => {
        try {
            const { email, password } = req.body;

            const user = await this.authRepository.findByEmail(email);

            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "User not found"
                });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(401).json({
                    success: false,
                    message: "Invalid credentials"
                });
            }

            const token = jwt.sign(
                { userId: user._id },
                process.env.JWT_SECRET,
                { expiresIn: "1d" }
            );

            return res.status(200).json({
                success: true,
                message: "Login successful",
                token
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    };
}