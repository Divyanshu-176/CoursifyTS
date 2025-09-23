import mongoose, { Model, Schema} from 'mongoose'




export interface IUser {
    email:String,
    password:String,
    name:String
}


export interface IAdmin{
    email:String,
    password:String,
    name:String
}

export interface ICourse{
    title:String,
    description:String,
    price:Number,
    creatorId: Schema.Types.ObjectId
}

export interface IPurchase{
    userId: Schema.Types.ObjectId,
    courseId: Schema.Types.ObjectId
}


const userSchema = new Schema<IUser>({
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    name: {type:String, required:true}
})

const adminSchema = new Schema<IAdmin>({
    email:String,
    password:String,
    name:String
})


const courseSchema = new Schema<ICourse>({
    title:String,
    description:String,
    price:Number,
    creatorId:Schema.Types.ObjectId
})

const purchaseSchema = new Schema<IPurchase>({
    userId: {type:Schema.Types.ObjectId, ref:"user"},
    courseId: {type:Schema.Types.ObjectId, ref:"course"}
})






export const userModel:Model<IUser> = mongoose.model<IUser>('user',userSchema)
export const adminModel = mongoose.model<IAdmin>('admin', adminSchema)
export const courseModel = mongoose.model<ICourse>('course',courseSchema)
export const purchaseModel= mongoose.model<IPurchase>('purchase', purchaseSchema)