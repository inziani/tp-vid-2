abstract class Department {
  
  protected employees: string[];
  static fiscalYear = 2002


  constructor(private readonly id: string, private  name: string){
    // this.name = n;
    this.employees = [];
  }

  static createEmployee(name: string){
    return {name: name};
}

  abstract describe(this: Department): void;
  // {
  //   console.log('Department' + ' '+ this.name);
  //   console.log(`Department ${this.name}, ${this.id}`);
  // }

  addEmployee(employee: string){
    this.employees.push(employee);
  }

  printEmployeeInformation(){
    console.log(this.employees.length);
    console.log(this.employees)
  }

}


// Inheritance

class ITDepartment extends Department{
  constructor(id: string, public admins: string[]){
    super(id, 'IT');
    this.admins = admins;
  } 

  describe (){
    console.log('IT Department' + this.admins);
    console.log(`IT Department   ${this.admins}`);
  }
}

// new Department Object on abstract class
//  Abstract classes are blueprint classes for building and use by other inheriting clases.
// const department = new Department('One', 'Accounting');
// console.log(department);
// department.describe();

// // Add employees to department

// department.addEmployee('Sophia');
// department.addEmployee('Malakai');
// department.printEmployeeInformation();

//new inherited ID department object

const changeCoE = new ITDepartment('Two', ['ChangeITO'])
changeCoE.addEmployee('Kalekye');
changeCoE.printEmployeeInformation();
console.log(changeCoE);

// new inherited accounting department

class Accounting extends Department{
  private lastReport: string;

  constructor(id: string, private reports: string[]){
    super(id, 'accounting')
    this.lastReport = reports[0]
  }

  get mostRecentReport(){
    if (this.lastReport){
      return this.lastReport;
    }
    throw new Error('No report found');
  }

  set mostRecentReport(value: string){
    if (!value){
      throw new Error('Please pass in a valid value');
    }
    this.addReport(value);

  }


  addReport(text:string){
    this.reports.push(text);
    this.lastReport = text
  }

  printReports(){
    console.log(this.reports)
  }

  describe (){
    console.log('Accounting  Department' + this.reports);
    console.log(`Accounting Department   ${this.reports}`);
  }
}

const accounts = new Accounting('Three', [])
accounts.mostRecentReport = 'Test the setter then the getter'
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
