import authModel from "../model/authModel.js";
import bcryptjs from "bcryptjs";
import crypto from "crypto";
import { sendVerificationMail } from "../email/emailConfig.js";
import jwt from "jsonwebtoken";
import { envConfig } from "../config/envConfig.js";

// Register User Controller
export const registerAuth = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcryptjs.genSalt(10);
    const hash = await bcryptjs.hash(password, salt);
    const token = crypto.randomBytes(16).toString("hex");

    const auth = await authModel.create({
      username,
      email,
      password: hash,
      token,
    });

    sendVerificationMail(auth).then(() => {
      console.log(`Mail is sent to ${auth.username}`);
    });

    return res.status(201).json({
      message: "You have just registered on Taskme",
      data: auth,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Verify User Controller
export const verifyAuth = async (req, res) => {
  try {
    const { token } = req.params;

    jwt.verify(token, envConfig.TOKEN, async (err, payload) => {
      if (err) throw new Error();
      else {
        const auth = await authModel.findByIdAndUpdate(
          payload.id,
          {
            token: "",
            verified: true,
          },
          { new: true }
        );

        return res.status(200).json({
          message: `${auth.username}'s account has been verified`,
          data: auth,
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// View All Users
export const viewAllUsers = async (req, res) => {
  try {
    const auth = await authModel.find();

    return res.status(200).json({
      message: "All Users on Taskme Application",
      data: auth,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// View One User
export const viewOneUser = async (req, res) => {
  try {
    const { authID } = req.params;
    const auth = await authModel.findById(authID);

    return res.status(200).json({
      message: `${auth.username}'s record`,
      data: auth,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
