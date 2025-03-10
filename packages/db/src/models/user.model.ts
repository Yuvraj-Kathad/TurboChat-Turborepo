import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: null,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      sparse: true,
    },
    profile_pic: {
      type: String,
      default: null,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    about: {
      type: String,
      default: null,
    },
    profileSetup: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export const User = mongoose.model("User", userSchema);
