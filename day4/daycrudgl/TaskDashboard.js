import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const TaskDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Load tasks & listen for updates
  useEffect(() => {
    socket.on("loadTasks", (loadedTasks) => {
      setTasks(loadedTasks);
    });

    socket.on("taskUpdated", (updatedTasks) => {
      console.log("Task list updated:", updatedTasks);
      setTasks(updatedTasks); // Ensure state updates properly
    });

    return () => socket.off("taskUpdated"); // Cleanup on unmount
  }, []);

  // Add Task
  const addTask = () => {
    if (newTask.trim() !== "") {
      const task = { id: Date.now(), title: newTask };
      socket.emit("addTask", task);
      setNewTask(""); // Clear input after sending
    }
  };

  // Delete Task
  const deleteTask = (id) => {
    socket.emit("deleteTask", id);
  };

  return (
    <div className="task-dashboard">
      <h1>📋 Task Dashboard (Real-time)</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>➕ Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} <button onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskDashboard;
