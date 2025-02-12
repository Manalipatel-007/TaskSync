import React, { useState } from "react"; // Ensure only one React import

export const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "pending",
    priority: "low",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title || !task.description) {
      alert("Please fill in all required fields.");
      return;
    }
    console.log("Task Submitted:", task);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "400px", borderRadius: "10px" }}>
        <h2 className="text-center mb-4">Add Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Title"
              value={task.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              name="description"
              className="form-control"
              placeholder="Description"
              value={task.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <select
              name="status"
              className="form-control"
              value={task.status}
              onChange={handleChange}
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="mb-3">
            <select
              name="priority"
              className="form-control"
              value={task.priority}
              onChange={handleChange}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          {/* <div className="mb-3">
            <input
              type="date"
              name="dueDate"
              className="form-control"
              value={task.dueDate}
              onChange={handleChange}
            />
          </div> */}
          <button type="submit" className="btn btn-primary w-100">Submit Task</button>
        </form>
      </div>
    </div>
  );
};
