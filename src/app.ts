// interfaces -describes the structure of an object

interface Named {
  readonly name: string;
  age: number;
  residence?: string; // this makes the residence property optional. This can also be used in methods
}

interface Person extends Named { // inheritance in interfaces

  greet (phrase: string): void;

}

let user1: Person;

user1 = {
  name: 'Val', 
  age: 45,

  greet(phrase: string){
    console.log(phrase + ' ' + this.name)
  }
};

user1.greet('Hello - I am ');

//  How to to implement an interface in a class;

interface Greetable{
  readonly name: string; //  Read only interface properties - ensures that the name is not changed at all.


  greet(phrase: string): void;
}

class People implements Greetable {
  name: string;
  age: number;

  constructor(n: string, a: number){
    this.name = n;
    this.age = a;

  }
  greet(phrase: string){
    console.log(phrase + ' ' + this.name + this.age)
  }
}

const first_person = new People('Val', 45)

first_person.greet('Hello - my name is +')
console.log(first_person)

// Interfaces - can also be used to describe the structure of a function

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) =>{
  return n1 + n2
}

console.log(add(45, 20))

