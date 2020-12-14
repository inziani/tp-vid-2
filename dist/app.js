"use strict";
let user1;
user1 = {
    name: 'Val',
    age: 45,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user1.greet('Hello - I am ');
class People {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name + this.age);
    }
}
const first_person = new People('Val', 45);
first_person.greet('Hello - my name is +');
console.log(first_person);
let add;
add = (n1, n2) => {
    return n1 + n2;
};
console.log(add(45, 20));
