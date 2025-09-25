import { Router } from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from "dotenv";
import { adminModel, courseModel, purchaseModel } from "../database/db.js";
dotenv.config();
const ADMIN_SECRET = process.env.ADMIN_JWT_SECRET;
export const adminRouter = Router();
adminRouter.post('/signup', async (req, res) => {
    try {
        const { email, name, password } = req.body;
        const existingAdmin = await adminModel.findOne({ email });
        if (existingAdmin) {
            res.status(400).json({
                msg: "Admin of these credentials already exists!"
            });
            return;
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await adminModel.create({
            email: email,
            password: hashedPassword,
            name: name
        });
        res.status(201).json({
            msg: "New Admin Signed Up!"
        });
    }
    catch (error) {
        console.error(`error: ${error}`);
        res.status(500).json({
            msg: "Error has Occurred"
        });
    }
});
adminRouter.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    try {
        const admin = await adminModel.findOne({
            email
        });
        if (!admin) {
            res.status(400).json({
                msg: "This Admin doesn't exist"
            });
            return;
        }
        const hashCompare = await bcrypt.compare(password, admin.password);
        if (admin && hashCompare) {
            if (!ADMIN_SECRET)
                throw new Error("JWT secret not defined");
            const token = jwt.sign({
                id: admin._id
            }, ADMIN_SECRET);
            res.json({
                token: token,
                msg: "Admin has Signed In"
            });
        }
        else {
            res.status(400).json({
                msg: "Invalid Credentials"
            });
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server Error" });
    }
});
//# sourceMappingURL=admin.js.map