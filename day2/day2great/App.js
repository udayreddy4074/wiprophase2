import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./User";  // Removed the 'components/getuser/' part
import Add from "./Add";    // Removed 'components/adduser/'
import Edit from "./Edit";  // Removed 'components/updateuser/'
import axios from "axios";

function App() {
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleEdit = (employee) => {
        setSelectedEmployee(employee);
    };

    const handleSubmit = (values, { resetForm }) => {
        if (selectedEmployee) {
            axios.put(`http://localhost:5000/api/employees/${selectedEmployee.id}`, values)
                .then(() => {
                    setSelectedEmployee(null);
                    resetForm();
                })
                .catch(err => console.error("Error updating employee", err));
        } else {
            axios.post("http://localhost:5000/api/employees", values)
                .then(() => resetForm())
                .catch(err => console.error("Error adding employee", err));
        }
    };

    return (
        <Router>
            <div className="container mt-5">
                <h1 className="text-center">Employee Management</h1>
                <Routes>
                    <Route path="/" element={<User />} />
                    <Route path="/add" element={<Add />} />
                    <Route path="/edit/:id" element={<Edit />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
