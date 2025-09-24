import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

import type { Request, Response, NextFunction } from 'express'

dotenv.config()
const USER_SECRET = process.env.USER_JWT_SECRET

interface AuthenticatedRequest extends Request {
    user?:string
}
interface JWTPayload{
    id:string
}

export function userMiddleware(req:AuthenticatedRequest, res:Response, next:NextFunction){
    const token = req.headers.token as string;
    if(!token){return res.status(401).json({msg:"Authentication Required"})}

    try {
        if(!USER_SECRET){throw new Error ("USER_SECRET not defined")}
        const decoded = jwt.verify(token, USER_SECRET) as JWTPayload;
        req.user = decoded.id;
        next()
    } catch (error) {
        res.status(403).json({msg:"Error occured and even I dont know what it is 😂😂😭"})
        
    }
}