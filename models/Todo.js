import { Schema, model } from "mongoose";

const todoSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      required: true
    }
  },
  { timestamps: true }
);
export default model("todos", todoSchema);
