import { Task } from "../models/task.model";

export type Task = {
  title: string;
  status: string;
  description: string;
};

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
