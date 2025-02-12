import React, { useState } from "react";

export const TaskList = () => {
  // Dummy task data
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete React Assignment",
      description: "Finish the React component for task management.",
      status: "In Progress",
      priority: "High",
    },
  ]);

  return (
    <>
    <div>
    <div className="container mt-20">
      <h2 className="mt-80">All Tasks</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.status}</td>
              <td>{task.priority}</td>
              <td>
                <button className="btn btn-warning me-2">Edit</button>
                <button className="btn btn-danger">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </>
  );
};
