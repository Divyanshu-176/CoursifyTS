import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'



import { adminRouter } from './routes/admin.js'
import { userRouter } from './routes/user.js'
import { courseRouter } from './routes/course.js'


dotenv.config()
const app = express()
app.use(express.json())




app.use('/user',userRouter )
app.use('/admin', adminRouter)
app.use('/course', courseRouter)






















async function server():Promise<void>{

    await mongoose.connect(process.env.MONGOOSE_URL!);
    console.log("Database Connected");


    const PORT = process.env.PORT || 3001;
    await new Promise<void>((resolve, reject) => {
    app.listen(PORT, (err?: any) => {
      if (err) return reject(err);
      console.log(`🚀 Server started on port: ${PORT}`);
      resolve();
    });
  });  
}

server().catch((err) => {
  console.error("❌ Server failed to start:", err);
});
