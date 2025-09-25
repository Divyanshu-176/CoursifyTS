import { Router, type Request, type Response } from "express";
import {  courseModel, purchaseModel } from "../database/db.js";


import { userMiddleware } from "../middlewares/userMiddleware.js";

export const courseRouter = Router()


interface AuthenticatedRequest extends Request{
    userId?:string
}

courseRouter.post("/purchase", userMiddleware, async(req: AuthenticatedRequest,res:Response):Promise<void>=>{

    const userId = req.userId;
    const {courseId} = req.body
    if(!courseId){throw new Error ("Provide CourseID!")}

    //here u also neeed to check that the user has actually paid the price
    try {
        await purchaseModel.create({
            userId,
            courseId
        })

        res.json({
        msg:"user course purchase success"
    })
    } catch (error) {
        res.status(403).json({
            msg:`error: ${error}`
        })
    }
    
})
 

courseRouter.get("/preview", async (req:Request,res:Response)=>{
    const courses = await courseModel.find({

    })

    res.json({
        courses:courses
    })
})