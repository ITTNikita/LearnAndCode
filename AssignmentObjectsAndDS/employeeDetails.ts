import * as readlineSync from 'readline-sync';

class Employee {
    private employeeName: string;
    private employeeAge: number;
    private employeeSalary: number;

    constructor() {
        this.employeeName = "";
        this.employeeAge = 0;
        this.employeeSalary = 0;
    }

    setEmployeeName(name: string): void {
        this.employeeName = name;
    }

    getEmployeeName(): string {
        return this.employeeName;
    }

    setEmployeeAge(age: number): void {
        this.employeeAge = age;
    }

    getEmployeeAge(): number {
        return this.employeeAge;
    }

    setEmployeeSalary(salary: number): void {
        this.employeeSalary = salary;
    }

    getEmployeeSalary(): number {
        return this.employeeSalary;
    }
}

function getEmployeeDetails(): { name: string; age: number; salary: number } {
    let name = readlineSync.question("Enter the name: ");
    let age = parseInt(readlineSync.question("Enter the age: "), 10);
    let salary = parseFloat(readlineSync.question("Enter the salary: "));
    return { name, age, salary };
}

const employee = new Employee();
const { name, age, salary } = getEmployeeDetails();
employee.setEmployeeName(name);
employee.setEmployeeAge(age);
employee.setEmployeeSalary(salary);

console.log(`Employee Details:`);
console.log(`Name: ${employee.getEmployeeName()}`);
console.log(`Age: ${employee.getEmployeeAge()}`);
console.log(`Salary: ${employee.getEmployeeSalary()}`);
