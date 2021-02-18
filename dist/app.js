"use strict";
const e1 = {
    name: 'Robina',
    priviledges: ['create-server'],
    startDate: new Date()
};
function adding(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log(`Name:` + emp.name);
    if ('priviledges' in emp) {
        console.log('priviledges' + emp.priviledges);
    }
    if ('startDate' in emp) {
        console.log('startDate' + emp.startDate);
    }
}
printEmployeeInformation(e1);
class Car {
    drive() {
        console.log('Drive');
    }
}
class Truck {
    drive() {
        console.log('Drive truck...');
    }
    loadCargo(amount) {
        console.log(`Loading Cargo...` + amount);
    }
}
const v1 = new Car;
const v2 = new Truck;
function useVehicle(vehicle) {
    console.log(vehicle.drive());
    if (vehicle instanceof Truck) {
        console.log(vehicle.loadCargo);
    }
}
function moveAnimal(animal) {
    switch (animal.type) {
        case 'bird':
            console.log(animal.flyingSpeed);
            break;
        case 'horse':
            console.log(animal.runningSpeed);
    }
}
const paragraph = document.getElementById('message-output');
