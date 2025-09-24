import { Router, type Request,  type Response } from "express";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from'dotenv'
import { adminModel, courseModel, purchaseModel, userModel,  type IUserDocument} from "../database/db.js";


dotenv.config()

const USER_SECRET = process.env.USER_JWT_SECRET


export const userRouter = Router()




userRouter.post('/signup', async (req:Request, res:Response):Promise<void> => {
    try {
        const {email, name, password} = req.body

        const existingUser:IUserDocument | null = await userModel.findOne({email})
        if(existingUser){
            res.status(400).json({
                msg:"User of these credentials already exists!"
            });
            return;
        }


        const hashedPassword = await bcrypt.hash(password, 10);
        
        await userModel.create({
            email:email,
            password:hashedPassword,
            name:name
        })
        res.status(201).json({
            msg:"New User Signed Up!"
        })
        
    } catch (error) {
        console.error(`error: ${error}`)
        res.status(500).json({
            msg:"Error has Occurred"
        })
    }
})


userRouter.post("/signin", async(req:Request, res:Response):Promise<void>=>{
    const {email,password}= req.body
    try{
        const user:IUserDocument | null = await userModel.findOne({
            email
        })
        
        if(!user){
            res.status(400).json({
                msg:"This User doesn't exist"
            })
            return;
        }

        const hashCompare = await bcrypt.compare(password, user.password)
        if(user && hashCompare){
            if(!USER_SECRET) throw new Error ("JWT secret not defined")
            const token = jwt.sign({
                id: user._id
            },USER_SECRET)

            res.json({
                token:token,
                msg:"User has Signed In"
            })
        }else{
            res.status(400).json({
                msg:"Invalid Credentials"
            })
        }
    }catch(err){
        console.error(err)
        res.status(500).json({msg:"Server Error"})
    }

})