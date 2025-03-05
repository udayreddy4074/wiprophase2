let employees = [
    { id: 1, name: "John Doe", address: "123 Street", dept: "HR", manager: "Alice" },
    { id: 2, name: "Jane Smith", address: "456 Avenue", dept: "IT", manager: "Bob" }
  ];
  
  // Get all employees
  exports.getEmployees = (req, res) => {
    res.json(employees);
  };
  
  // Get single employee by ID
  exports.getEmployeeById = (req, res) => {
    const employee = employees.find(emp => emp.id === parseInt(req.params.id));
    employee ? res.json(employee) : res.status(404).json({ message: "Employee not found" });
  };
  
  // Add new employee
  exports.addEmployee = (req, res) => {
    const newEmployee = { id: employees.length + 1, ...req.body };
    employees.push(newEmployee);
    res.status(201).json(newEmployee);
  };
  
  // Update employee
  exports.updateEmployee = (req, res) => {
    const index = employees.findIndex(emp => emp.id === parseInt(req.params.id));
    if (index !== -1) {
      employees[index] = { ...employees[index], ...req.body };
      res.json(employees[index]);
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  };
  
  // Delete employee
  exports.deleteEmployee = (req, res) => {
    employees = employees.filter(emp => emp.id !== parseInt(req.params.id));
    res.json({ message: "Employee deleted" });
  };
  