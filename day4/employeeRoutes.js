const express = require("express");
const {
  getEmployees, getEmployeeById, addEmployee, updateEmployee, deleteEmployee
} = require("../controllers/employeeController");

const router = express.Router();

router.get("/", getEmployees);
router.get("/:id", getEmployeeById);
router.post("/", addEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

module.exports = router;