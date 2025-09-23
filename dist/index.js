import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Router } from 'express';
dotenv.config();
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.json({ msg: "ihdiuhdiuh" });
});
// async function server():Promise<void>{
//     await mongoose.connect(process.env.MONGOOSE_URL!);
//     console.log("Database Connected");
//     const PORT = process.env.PORT || 3001;
//     await new Promise<void>((resolve, reject) => {
//     app.listen(PORT, (err?: any) => {
//       if (err) return reject(err);
//       console.log(`🚀 Server started on port: ${PORT}`);
//       resolve();
//     });
//   });  
// }
async function server() {
    try {
        await mongoose.connect(process.env.MONGOOSE_URL);
        console.log("Db connected");
        await app.listen(process.env.PORT || 3000);
        console.log("Connncted to port");
    }
    catch (err) {
        console.error(err);
    }
}
server();
// server().catch((err) => {
//   console.error("❌ Server failed to start:", err);
// });
//# sourceMappingURL=index.js.map