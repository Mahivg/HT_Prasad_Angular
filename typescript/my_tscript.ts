var myName : string;

myName = "test";

var test: object = { name : "Magesh" };

test = { age : 10 };

var test1: { name: string, age: number };

test1 = { name: "test", age: 10};

interface myTestType  {
    name: string,
    age: number,
    email: string
}

var person: myTestType;

person = { name: "test", age: 10, email: '' };

let myArray: string[];
myArray = ["1","2","3"];


function add(num1: number, num2: number): number {
    return num1 + num2;
}

var added = add(1,2);
console.log(added);

class Employee {
    name : string;
    age: number;
    email: string;
    constructor(name: string,age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}

var emp1 = new Employee("test", 20, "test@gmail.com");
var tesstssss;