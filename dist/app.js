"use strict";
class Department {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log('Department' + ' ' + this.name);
        console.log(`Department ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('Accounting');
console.log(accounting);
accounting.describe();
accounting.addEmployee('Sophia');
accounting.addEmployee('Malakai');
accounting.printEmployeeInformation();
