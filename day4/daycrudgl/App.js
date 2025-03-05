import React from "react";
import TaskDashboard from "./components/TaskDashboard";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <ThemeToggle>
      <TaskDashboard />
    </ThemeToggle>
  );
};

export default App;
