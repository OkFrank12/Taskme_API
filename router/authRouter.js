import { Router } from "express";
import {
  registerAuth,
  verifyAuth,
  viewAllUsers,
  viewOneUser,
} from "../controller/authController.js";

const authRouter = Router();

authRouter.route("/register").post(registerAuth);
authRouter.route("/:token/verify-user").get(verifyAuth);
authRouter.route("/all-users").get(viewAllUsers);
authRouter.route("/:authID/one-user").get(viewOneUser);

export default authRouter;
