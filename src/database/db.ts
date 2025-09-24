import mongoose, { Model, Schema, Document, Types} from 'mongoose'




export interface IUser {
    email:string,
    password:string,
    name:string
}
export interface IUserDocument extends IUser, Document{
    _id: Types.ObjectId
}


export interface IAdmin{
    email:string,
    password:string,
    name:string
}
export interface IAdminDocument extends IAdmin, Document{
    _id: Types.ObjectId
}


export interface ICourse{
    title:string,
    description:string,
    price:Number,
    creatorId: Schema.Types.ObjectId
}
export interface ICourseDocument extends ICourse, Document{
    _id: Types.ObjectId
}


export interface IPurchase{
    userId: Schema.Types.ObjectId,
    courseId: Schema.Types.ObjectId
}
export interface IPurchaseDocument extends IPurchase, Document{
    _id: Types.ObjectId
}



const userSchema = new Schema<IUserDocument>({
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    name: {type:String, required:true}
})

const adminSchema = new Schema<IAdminDocument>({
    email:String,
    password:String,
    name:String
})


const courseSchema = new Schema<ICourseDocument>({
    title:String,
    description:String,
    price:Number,
    creatorId:Schema.Types.ObjectId
})

const purchaseSchema = new Schema<IPurchaseDocument>({
    userId: {type:Schema.Types.ObjectId, ref:"user"},
    courseId: {type:Schema.Types.ObjectId, ref:"course"}
})






export const userModel:Model<IUserDocument> = mongoose.model<IUserDocument>('user',userSchema)
export const adminModel:Model<IAdminDocument> = mongoose.model<IAdminDocument>('admin', adminSchema)
export const courseModel:Model<ICourseDocument> = mongoose.model<ICourseDocument>('course',courseSchema)
export const purchaseModel:Model<IPurchaseDocument>= mongoose.model<IPurchaseDocument>('purchase', purchaseSchema)