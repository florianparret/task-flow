const fastify = require("fastify")({ logger: true });
const mongoose = require("mongoose");
require("dotenv").config();

// Import my routes
const taskRoutes = "./routes/task.routes";
