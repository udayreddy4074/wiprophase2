import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeToggle from "./ThemeToggle";
import StockDashboard from "./StockDashboard";

function App() {
  return (
    <ThemeToggle>
      <StockDashboard />
    </ThemeToggle>
  );
}

export default App;
