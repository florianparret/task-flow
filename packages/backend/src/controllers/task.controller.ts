const Task = require("../models/task.model");

async function getAllTasks(request: any, reply: any) {
  try {
    reply.send("Not implemented yet");
  } catch (error) {
    reply.status(500).send(error);
  }
}

async function createTask(request: any, reply: any) {
  try {
    reply.send("Not implemented yet");
  } catch (error) {
    reply.status(500).send(error);
  }
}

async function updateTask(request: any, reply: any) {
  try {
    reply.send("Not implemented yet");
  } catch (error) {
    reply.status(500).send(error);
  }
}

async function deleteTask(request: any, reply: any) {
  try {
    reply.send("Not implemented yet");
  } catch (error) {
    reply.status(500).send(error);
  }
}

module.exports = {
    getAllTasks, createTask, updateTask, deleteTask
}
