import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeList from "./EmployeeList";
import EmployeeForm from "./EmployeeForm";
import axios from "axios";

function App() {
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleEdit = (employee) => {
        setSelectedEmployee(employee);
    };

    const handleSubmit = (values, { resetForm }) => {
        if (selectedEmployee) {
            // Update Employee (Fixed backticks `` for string interpolation)
            axios.put(`http://localhost:5000/employees/${selectedEmployee.id}`, values)
                .then(() => {
                    setSelectedEmployee(null);
                    resetForm();
                })
                .catch(err => console.error("Error updating employee", err));
        } else {
            // Add New Employee
            axios.post(`http://localhost:5000/employees/${selectedEmployee.id}`, values)
            // /employees", values)
                .then(() => resetForm())
                .catch(err => console.error("Error adding employee", err));
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Employee Management</h1>
            <EmployeeForm 
                initialValues={selectedEmployee || { name: "", address: "", dept: "", manager: "" }} 
                onSubmit={handleSubmit} 
            />
            <EmployeeList onEdit={handleEdit} />
        </div>
    );
}

export default App;
