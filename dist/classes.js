"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2002;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
        this.admins = admins;
    }
    describe() {
        console.log('IT Department' + this.admins);
        console.log(`IT Department   ${this.admins}`);
    }
}
const changeCoE = new ITDepartment('Two', ['ChangeITO']);
changeCoE.addEmployee('Kalekye');
changeCoE.printEmployeeInformation();
console.log(changeCoE);
class Accounting extends Department {
    constructor(id, reports) {
        super(id, 'accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass in a valid value');
        }
        this.addReport(value);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    describe() {
        console.log('Accounting  Department' + this.reports);
        console.log(`Accounting Department   ${this.reports}`);
    }
}
const accounts = new Accounting('Three', []);
accounts.mostRecentReport = 'Test the setter then the getter';
console.log(accounts.mostRecentReport);
accounts.addEmployee('Madam');
accounts.printEmployeeInformation();
accounts.addReport('sales');
accounts.printReports();
console.log(accounts);
const firstStaff = Department.createEmployee('Valentine');
console.log(firstStaff, Department.fiscalYear);
accounts.describe();
changeCoE.describe();
