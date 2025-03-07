import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

const Home = lazy(() => import("./Pages/Home"));
const Dashboard = lazy(() => import("./Pages/Dashboard"));
const Login = lazy(() => import("./Pages/Login"));
const Profile = lazy(() => import("./Pages/Profile"));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
