import { Router } from "express";
import { courseModel, purchaseModel } from "../database/db.js";
import { userMiddleware } from "../middlewares/userMiddleware.js";
export const courseRouter = Router();
courseRouter.post("/purchase", userMiddleware, async (req, res) => {
    const userId = req.userId;
    const { courseId } = req.body;
    if (!courseId) {
        throw new Error("Provide CourseID!");
    }
    //here u also neeed to check that the user has actually paid the price
    try {
        await purchaseModel.create({
            userId,
            courseId
        });
        res.json({
            msg: "user course purchase success"
        });
    }
    catch (error) {
        res.status(403).json({
            msg: `error: ${error}`
        });
    }
});
courseRouter.get("/preview", async (req, res) => {
    const courses = await courseModel.find({});
    res.json({
        courses: courses
    });
});
//# sourceMappingURL=course.js.map