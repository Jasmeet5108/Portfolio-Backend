import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors";
import userRouter from "./routes/user.js";
import connectToMongo from "./connect/user.js";


connectToMongo(process.env.MONGODB_URI).then(() => { console.log(`MongoDb connected`) });

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use(cors());
app.use("/form", userRouter);

app.get("/", (req, res) => {
    res.send("Hey!!! Your backend is working fine")
})

app.listen(port, () => { console.log(`App listening on port:${port}`) });