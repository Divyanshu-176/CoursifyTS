import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const ADMIN_SECRET = process.env.ADMIN_JWT_SECRET;
export function adminMiddleware(req, res, next) {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).json({ msg: "Authentication Required" });
    }
    try {
        if (!ADMIN_SECRET) {
            throw new Error("ADMIN_SECRET not defined");
        }
        const decoded = jwt.verify(token, ADMIN_SECRET);
        req.adminId = decoded.id;
        next();
    }
    catch (error) {
        res.status(403).json({ msg: "Error occured and even I dont know what it is 😂😂😭" });
    }
}
//# sourceMappingURL=adminMiddleware.js.map