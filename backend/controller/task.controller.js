
const Task = require("../models/Task");
const mongoose = require("mongoose");

// ✅ Create a new task
const createTask = async (req, res) => {
    try {
        const { userId, title, description, status, priority, dueDate } = req.body;

        const newTask = new Task({ user: userId, title, description, status, priority, dueDate });
        await newTask.save();

        res.status(201).json({ message: "Task created successfully", task: newTask });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

// ✅ Get all tasks for a user
const getTasks = async (req, res) => {
    try {
        const { userId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "Invalid user ID format" });
        }

        const tasks = await Task.find({ user: new mongoose.Types.ObjectId(userId) });

        if (!tasks.length) {
            return res.status(404).json({ message: "No tasks found for this user" });
        }

        res.status(200).json({ tasks });
    } catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
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
        res.status(500).json({ message: "Server Error", error: error.message });
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
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

module.exports = { createTask, getTasks, updateTask, deleteTask };
