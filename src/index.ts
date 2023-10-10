
// number types
let age: number = 30;
let weight: number = 150.5;


console.log(age.toFixed(2));

// string

let username: string = "Mc Developer";
let greeting: string = `Hello, my name is ${username}`;

console.log(greeting);

// boolean

let isAdult: boolean = false;

// array

let numbers: number[] = [1, 22, 55, 66];

console.log(numbers.map(number => number.toFixed(2)));

let names: string[] = ["Kasim", "najax", "feisal", "abdullahi", "mustafe"];

console.log(names.map(name => name.toUpperCase()));

// tuple

let person: [string, number] = ["john smith", 30];

enum Role { Admin, User, Editor };

let admin: Role = Role.Admin;


let variable: any = "hamuuda";

variable = 2030;
variable = false;

// void

function logMessage(message: string): void {
    console.log(2023)
}


// null and undefined

let u: undefined = undefined;
let n: null = null;

// Functions and Type Annotations


function greet(name: string): string {
    return `hello , ${name}`;
}

console.log(greet("Hamuuda 😍"));

// #### 2. **Function Expressions**

let myName: string = "hello"

const add: (a: number, b: number) => number = function (a, b) {
    return a + b;
}

console.log(add(20, 10))

// arrow function
const subtract: (a: number, b: number) => number = (a, b) => {
    return a - b;
}

console.log(subtract(20, 10))


// #### Optional and Default Parameters

function createGreeting(name: string, age?: number): string {

    return age ? `My name is ${name} and i'm ${age} years old` : `My name is ${name}`;

}

console.log(createGreeting('Hamuuda'))
console.log(createGreeting('Bashka', 50))


// objects and type aliases

type User = { name: string, age: number, description?: string }

let user: User = { name: "hamuuda", age: 50 }
let user2: User = { name: "hamuuda", age: 50 }
let user3: User = { name: "hamuuda", age: 50 }


// Union Types

type StringOrNumber = string | number


let id: StringOrNumber = "hamuuda"

// Intersection Types

type Named = { name: string }
type Aged = { age: number }

type Person = Named & Aged;


const newPerson: Person = { name: "hamuuda", age: 10 }

// ### 4. Nullable Types and Optional Chaining


const userInfo = { profile: { name: 'Alice', age: 30 } };


const ageInfo = userInfo?.profile?.age;



// ### 5. Nullish Coalescing Operator
const input = "hamuuda";


const output = input ?? 'default';

console.log(output)


// type Assertion

let unknownVar: unknown = "I am string";

let stringVar: string = (unknownVar as string).toUpperCase()


