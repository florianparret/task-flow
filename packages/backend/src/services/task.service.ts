import { Task } from "../models/task.model";

export async function createTask(task: unknown) {
  try {
    return await Task.create(task);
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getTasks() {
  try {
    return await Task.find();
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function deleteTask(id: string) {
  try {
    return await Task.deleteOne({ _id: id });
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function updateTask(id: string, task: unknown) {
  try {
    return await Task.findOneAndUpdate({ _id: id }, task);
  } catch (error: any) {
    throw new Error(error);
  }
}

