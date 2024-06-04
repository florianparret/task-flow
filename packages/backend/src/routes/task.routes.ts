const taskController = require("../controllers/task.controller");

async function routes(fastify:any, options:any) {
    fastify.get("/", taskController.getAllTasks)
    fastify.post("/", taskController.createTask)
    fastify.put("/:id", taskController.updateTask)
    fastify.delete("/:id", taskController.deleteTask)
}

module.exports = routes;