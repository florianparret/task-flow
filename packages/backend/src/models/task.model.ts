import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["To do", "In progress", "Done"],
  },
  description: {
    type: String,
  },
});

export const Task = mongoose.model("Task", taskSchema);
