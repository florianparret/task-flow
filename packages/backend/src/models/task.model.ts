import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: String,
  status: String,
  description: String,
});

export const Task = mongoose.model("Task", taskSchema);
