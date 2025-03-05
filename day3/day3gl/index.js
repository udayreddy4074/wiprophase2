import React from "react";
import ReactDOM from "react-dom/client";  // ✅ Import createRoot
import App from "./App";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// ✅ Register all necessary chart elements globally
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
