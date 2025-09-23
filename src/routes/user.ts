import { Router } from "express";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { adminModel, courseModel, purchaseModel, userModel } from "../database/db.js";



const USER_JWT_SECRET = process.env.USER_JWT_SECRET



export const userRouter = Router()