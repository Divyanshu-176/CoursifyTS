import mongoose, { Model, Schema } from 'mongoose';
export interface IUser {
    email: String;
    password: String;
    name: String;
}
export interface IAdmin {
    email: String;
    password: String;
    name: String;
}
export interface ICourse {
    title: String;
    description: String;
    price: Number;
    creatorId: Schema.Types.ObjectId;
}
export interface IPurchase {
    userId: Schema.Types.ObjectId;
    courseId: Schema.Types.ObjectId;
}
export declare const userModel: Model<IUser>;
export declare const adminModel: mongoose.Model<IAdmin, {}, {}, {}, mongoose.Document<unknown, {}, IAdmin, {}, {}> & IAdmin & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>;
export declare const courseModel: mongoose.Model<ICourse, {}, {}, {}, mongoose.Document<unknown, {}, ICourse, {}, {}> & ICourse & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>;
export declare const purchaseModel: mongoose.Model<IPurchase, {}, {}, {}, mongoose.Document<unknown, {}, IPurchase, {}, {}> & IPurchase & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>;
//# sourceMappingURL=db.d.ts.map