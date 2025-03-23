"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Employee = /** @class */ (function () {
    function Employee() {
        this.employeeName = "";
        this.employeeAge = 0;
        this.employeeSalary = 0;
    }
    Employee.prototype.setEmployeeName = function (name) {
        this.employeeName = name;
    };
    Employee.prototype.getEmployeeName = function () {
        return this.employeeName;
    };
    Employee.prototype.setEmployeeAge = function (age) {
        this.employeeAge = age;
    };
    Employee.prototype.getEmployeeAge = function () {
        return this.employeeAge;
    };
    Employee.prototype.setEmployeeSalary = function (salary) {
        this.employeeSalary = salary;
    };
    Employee.prototype.getEmployeeSalary = function () {
        return this.employeeSalary;
    };
    return Employee;
}());
function getEmployeeDetails() {
    var name = readlineSync.question("Enter the name: ");
    var age = parseInt(readlineSync.question("Enter the age: "), 10);
    var salary = parseFloat(readlineSync.question("Enter the salary: "));
    return { name: name, age: age, salary: salary };
}
var employee = new Employee();
var _a = getEmployeeDetails(), name = _a.name, age = _a.age, salary = _a.salary;
employee.setEmployeeName(name);
employee.setEmployeeAge(age);
employee.setEmployeeSalary(salary);
console.log("Employee Details:");
console.log("Name: ".concat(employee.getEmployeeName()));
console.log("Age: ".concat(employee.getEmployeeAge()));
console.log("Salary: ".concat(employee.getEmployeeSalary()));
