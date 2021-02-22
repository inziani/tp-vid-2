type Admin = {
  name: string,
  priviledges: string[];
}

type Employee = {
  name: string,
  startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Robina',
  priviledges: ['create-server'],
  startDate: new Date()
}

type Combinable = string  | number;
type Numeric = number | boolean;

// Typeof Type guard

type Universal = Combinable & Numeric;

function adding(a: Combinable, b: Combinable){
  if (typeof a === 'string' || typeof b ==='string'){
    return a.toString() + b.toString();
  }
  return a + b;

}

type UnknownEmployee = Admin & Employee;

function printEmployeeInformation(emp: UnknownEmployee){
  console.log(`Name:`+ emp.name);

  if ('priviledges' in emp ){
    console.log('priviledges' + emp.priviledges);
  }

  if ('startDate' in emp ){
    console.log('startDate' + emp.startDate);
  }
}

printEmployeeInformation(e1);

// Instance of Type guard

class Car{
  drive(){
    console.log('Drive');
  }
}

class Truck{
  drive(){
    console.log('Drive truck...');
  }

  loadCargo(amount: number){
    console.log(`Loading Cargo...` + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car;
const v2 = new Truck;

function useVehicle(vehicle: Vehicle){
  console.log(vehicle.drive())
  if (vehicle instanceof Truck){
    console.log(vehicle.loadCargo);
  }

}

interface Bird{
  type: 'bird';
  flyingSpeed: number;
}

interface Horse{
  type: 'horse';
  runningSpeed: number
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){
  switch (animal.type){
    case 'bird':
    console.log(animal.flyingSpeed);
    break;
    case 'horse':
      console.log(animal.runningSpeed)
  }
}

const paragraph = document.getElementById('message-output')! as HTMLElement;

// Function overloads

