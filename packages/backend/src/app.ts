import cors from "@fastify/cors";
import "dotenv/config";
import Fastify, { FastifyInstance } from "fastify";
import mongoose from "mongoose";
import { createTask, deleteTask, getTasks, updateTask } from "./services/task.service";

async function start() {
  const mongoUri: string = String(process.env.MONGO_URI);

  // Connect to my database
  mongoose
    .connect(mongoUri)
    .then(() => console.log("MongoDB connected"))
    .catch((error: any) => console.log(error));

  const fastify: FastifyInstance = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: "*",
  });

  fastify.get("/", (req, reply) => {
    reply.send({
      status: "Server is running",
    });
  });

  fastify.post("/api/v1/tasks", async (request, reply) => {
    await createTask(request.body);
    reply.status(201).send();
  });

  fastify.get("/api/v1/tasks", async (request, reply) => {
    const tasks = await getTasks();
    reply.send(JSON.stringify(tasks));
  });

  fastify.delete("/api/v1/tasks/:id", async (request, reply) => {
    const params = request.params as { id: string };
    await deleteTask(params.id);
    reply.status(204).send();
  });

  fastify.put("/api/v1/tasks/:id", async (request, reply) => {
    const params = request.params as { id: string };
    await updateTask(params.id, request.body);
    reply.status(201).send();
  });

  try {
    await fastify.listen({
      host: "0.0.0.0",
      port: Number(process.env.PORT) || 3000,
    });
    fastify.log.info(`Server is running on port`);
  } catch (error) {
    console.log(error);
  }
}

start();
