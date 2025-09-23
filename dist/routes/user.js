import { Router } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { adminModel, courseModel, purchaseModel, userModel } from "../database/db.js";
const USER_JWT_SECRET = process.env.USER_JWT_SECRET;
export const userRouter = Router();
userRouter.post('/signup', async (req, res) => {
    try {
        const { email, name, password } = req.body;
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            res.status(400).json({
                msg: "User of these credentials already exists!"
            });
            return;
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await userModel.create({
            email: email,
            password: hashedPassword,
            name: name
        });
        res.status(201).json({
            msg: "New User Signed Up!"
        });
    }
    catch (error) {
        console.error(`error: ${error}`);
        res.status(500).json({
            msg: "Error has Occurred"
        });
    }
});
//# sourceMappingURL=user.js.map