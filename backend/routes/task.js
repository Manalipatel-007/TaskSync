const express = require("express");
const { createTask, getTasks, updateTask, deleteTask } = require("../controllers/taskController");
const router = express.Router();

router.post("/create", createTask);  // ✅ Create a new task
router.get("/:userId", getTasks);    // ✅ Get all tasks for a user
router.put("/update/:taskId", updateTask);  // ✅ Update a task
router.delete("/delete/:taskId", deleteTask);  // ✅ Delete a task

module.exports = router;
