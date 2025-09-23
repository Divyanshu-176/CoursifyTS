import { Router } from "express";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import { adminModel, courseModel, purchaseModel } from "../database/db.js";

const ADMIN_JWT_SECRET = process.env.ADMIN_JWT_SECRET



export const adminRouter = Router()