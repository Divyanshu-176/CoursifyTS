import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const USER_SECRET = process.env.USER_JWT_SECRET;
export function userMiddleware(req, res, next) {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).json({ msg: "Authentication Required" });
    }
    try {
        if (!USER_SECRET) {
            throw new Error("USER_SECRET not defined");
        }
        const decoded = jwt.verify(token, USER_SECRET);
        req.userId = decoded.id;
        next();
    }
    catch (error) {
        res.status(403).json({ msg: "Error occured and even I dont know what it is 😂😂😭" });
    }
}
//# sourceMappingURL=userMiddleware.js.map