import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import { Signup } from "./components/auth/signup";
import { Login } from "./components/auth/login";
import { TaskForm } from "./components/addTask/AddTask"; // Import TaskForm
import { TaskList } from "./components/TaskList/TaskList";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/AddTask" element={<TaskForm />} />
        <Route path="/tasks" element={<TaskList />} />
      </Routes>
    </Router>
  );
}

export default App;
