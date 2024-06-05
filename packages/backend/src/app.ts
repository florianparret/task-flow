const fastify = require("fastify")({ logger: true });
//const mongoose = require("mongoose");
require("dotenv").config();

// Import my routes
const taskRoutes = require("./routes/task.routes.ts");
// Connect to my database
console.log(taskRoutes);
// Start my server
fastify.register(taskRoutes, {prefix: '/api/v1/tasks'});

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 5000);
    fastify.log.info(`Server is running on port ${fastify.server.address().port}`)
  } catch (error) {
    console.log(error);
  }
}

start();