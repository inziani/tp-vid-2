class Department {
  
  private employees: string[];

  constructor(private  name: string){
    // this.name = n;
    this.employees = [];
  }

  describe(this: Department){
    console.log('Department' + ' '+ this.name);
    console.log(`Department ${this.name}`);
  }

  addEmployee(employee: string){
    this.employees.push(employee);
  }

  printEmployeeInformation(){
    console.log(this.employees.length);
    console.log(this.employees)
  }

}
// new Department Object
const accounting = new Department('Accounting');
console.log(accounting);
accounting.describe();

// Add employees to accounting department

accounting.addEmployee('Sophia');
accounting.addEmployee('Malakai');
accounting.printEmployeeInformation();