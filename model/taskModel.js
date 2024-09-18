import mongoose from "mongoose";

const taskModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "NEW", // PENDING // FINISHED
    },
    priority: {
      type: String, // Urgent // High // Low
      required: true,
    },
    userId: {
      type: String,
    },
    auth: [
      {
        type: mongoose.Types.ObjectId,
        ref: "auths",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("todos", taskModel);

// category: {
//   type: String,
//   required: true,
//   // Work // Hobby // Health
// },
