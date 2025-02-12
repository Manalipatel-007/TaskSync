const Task = require("../models/Task");

// ✅ Create a new task
const createTask = async (req, res) => {
    try {
        const { userId, title, description, status, priority, dueDate } = req.body;

        const newTask = new Task({ userId, title, description, status, priority, dueDate });
        await newTask.save();

        res.status(201).json({ message: "Task created successfully", task: newTask });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

// ✅ Get all tasks for a user
const getTasks = async (req, res) => {
    try {
        const { userId } = req.params;
        const tasks = await Task.find({ userId });

        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

// ✅ Update a task (status, description, priority, etc.)
const updateTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const updates = req.body;

        const updatedTask = await Task.findByIdAndUpdate(taskId, updates, { new: true });

        if (!updatedTask) return res.status(404).json({ message: "Task not found" });

        res.status(200).json({ message: "Task updated successfully", task: updatedTask });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

// ✅ Delete a task
const deleteTask = async (req, res) => {
    try {
        const { taskId } = req.params;

        const deletedTask = await Task.findByIdAndDelete(taskId);

        if (!deletedTask) return res.status(404).json({ message: "Task not found" });

        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

module.exports = { createTask, getTasks, updateTask, deleteTask };
