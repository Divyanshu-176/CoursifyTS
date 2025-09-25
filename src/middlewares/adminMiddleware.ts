import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

import type { Request, Response, NextFunction } from 'express'

dotenv.config()
const ADMIN_SECRET = process.env.ADMIN_JWT_SECRET

interface AuthenticatedRequest extends Request {
    adminId?:string
}
interface JWTPayload{
    id:string
}

export function adminMiddleware(req:AuthenticatedRequest, res:Response, next:NextFunction){
    const token = req.headers.token as string;
    if(!token){return res.status(401).json({msg:"Authentication Required"})}

    try {
        if(!ADMIN_SECRET){throw new Error ("ADMIN_SECRET not defined")}
        const decoded = jwt.verify(token, ADMIN_SECRET) as JWTPayload;
        req.adminId = decoded.id;
        next()
    } catch (error) {
        res.status(403).json({msg:"Error occured and even I dont know what it is 😂😂😭"})
        
    }
}