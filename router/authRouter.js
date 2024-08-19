import { Router } from "express";
import { registerAuth, verifyAuth } from "../controller/authController.js";

const authRouter = Router();

authRouter.route("/register").post(registerAuth);
authRouter.route("/:token/verify-user").get(verifyAuth);

export default authRouter;
