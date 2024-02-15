import express from "express";
const router = express.Router();
import functions from "../controllers/user.js";

const { handleGetReq, handlePostReq } = functions;

router.route("/")
    .get(handleGetReq)
    .post(handlePostReq)

export default router