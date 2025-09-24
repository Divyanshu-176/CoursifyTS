import { Model, Schema, Document, Types } from 'mongoose';
export interface IUser {
    email: string;
    password: string;
    name: string;
}
export interface IUserDocument extends IUser, Document {
    _id: Types.ObjectId;
}
export interface IAdmin {
    email: string;
    password: string;
    name: string;
}
export interface IAdminDocument extends IAdmin, Document {
    _id: Types.ObjectId;
}
export interface ICourse {
    title: string;
    description: string;
    price: Number;
    creatorId: Schema.Types.ObjectId;
}
export interface ICourseDocument extends ICourse, Document {
    _id: Types.ObjectId;
}
export interface IPurchase {
    userId: Schema.Types.ObjectId;
    courseId: Schema.Types.ObjectId;
}
export interface IPurchaseDocument extends IPurchase, Document {
    _id: Types.ObjectId;
}
export declare const userModel: Model<IUserDocument>;
export declare const adminModel: Model<IAdminDocument>;
export declare const courseModel: Model<ICourseDocument>;
export declare const purchaseModel: Model<IPurchaseDocument>;
//# sourceMappingURL=db.d.ts.map