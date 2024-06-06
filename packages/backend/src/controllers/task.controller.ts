const Task = require("../models/task.model");

async function getAllTasks(request: any, reply: any) {
  try {
    const tasks = await Task.find();
    reply.send(tasks);
  } catch (error) {
    reply.status(500).send(error);
  }
}

async function createTask(request: any, reply: any) {
  try {
    const task = new Task(request.body);
    const result = await task.save();
    reply.send(result);
  } catch (error) {
    reply.status(500).send(error);
  }
}

async function updateTask(request: any, reply: any) {
  try {
    const task = await Task.findByIdAndUpdate(request.params.id, request.body, {
      new: true,
    });
    reply.send(task);
  } catch (error) {
    reply.status(500).send(error);
  }
}

async function deleteTask(request: any, reply: any) {
  try {
    await Task.findByIdAndDelete(request.params.id);
    reply.status(204).send();
  } catch (error) {
    reply.status(500).send(error);
  }
}

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};
