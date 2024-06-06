const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["to do", "pending", "completed"],
  },
  description: {
    type: String,
    required: true,
  },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;