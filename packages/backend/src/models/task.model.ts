const mongoose = require("mongoose");

const TaskSchema = mongoose.schema({
    title: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ["to do", "pending", "completed"]
    },
    description: {
        type: String,
        required: true
    }
})