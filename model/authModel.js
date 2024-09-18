import mongoose from "mongoose";

const authModel = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    taskHistory: [
      {
        type: mongoose.Types.ObjectId,
        ref: "todos",
      },
    ],
    pendingHistory: [
      {
        type: mongoose.Types.ObjectId,
        ref: "todos",
      },
    ],
    doneHistory: [
      {
        type: mongoose.Types.ObjectId,
        ref: "todos",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("auths", authModel);
