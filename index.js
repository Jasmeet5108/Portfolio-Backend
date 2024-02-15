import express from "express";
import cors from "cors";
import userRouter from "./routes/user.js";
import connectToMongo from "./connect/user.js";

connectToMongo("mongodb://localhost:27017/portfolio-form").then(() => { console.log(`MongoDb connected`) });

const app = express();
const port = 9000;

app.use(express.json());
app.use(cors());
app.use("/form", userRouter);

app.listen(port, () => { console.log(`App listening on port:${port}`) });