import mongoose, { Model, Schema } from 'mongoose';
const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true }
});
const adminSchema = new Schema({
    email: String,
    password: String,
    name: String
});
const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    creatorId: Schema.Types.ObjectId
});
const purchaseSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "user" },
    courseId: { type: Schema.Types.ObjectId, ref: "course" }
});
export const userModel = mongoose.model('user', userSchema);
export const adminModel = mongoose.model('admin', adminSchema);
export const courseModel = mongoose.model('course', courseSchema);
export const purchaseModel = mongoose.model('purchase', purchaseSchema);
//# sourceMappingURL=db.js.map