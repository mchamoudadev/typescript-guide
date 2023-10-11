"use strict";
var _a;
let age = 30;
let weight = 150.5;
console.log(age.toFixed(2));
let username = "Mc Developer";
let greeting = `Hello, my name is ${username}`;
console.log(greeting);
let isAdult = false;
let numbers = [1, 22, 55, 66];
console.log(numbers.map(number => number.toFixed(2)));
let names = ["Kasim", "najax", "feisal", "abdullahi", "mustafe"];
console.log(names.map(name => name.toUpperCase()));
let person = ["john smith", 30];
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Editor"] = 2] = "Editor";
})(Role || (Role = {}));
;
let admin = Role.Admin;
let variable = "hamuuda";
variable = 2030;
variable = false;
function logMessage(message) {
    console.log(2023);
}
let u = undefined;
let n = null;
function greet(name) {
    return `hello , ${name}`;
}
console.log(greet("Hamuuda 😍"));
let myName = "hello";
const add = function (a, b) {
    return a + b;
};
console.log(add(20, 10));
const subtract = (a, b) => {
    return a - b;
};
console.log(subtract(20, 10));
function createGreeting(name, age) {
    return age ? `My name is ${name} and i'm ${age} years old` : `My name is ${name}`;
}
console.log(createGreeting('Hamuuda'));
console.log(createGreeting('Bashka', 50));
let id = "hamuuda";
const newPerson = { name: "hamuuda", age: 10 };
const userInfo = { profile: { name: 'Alice', age: 30 } };
const ageInfo = (_a = userInfo === null || userInfo === void 0 ? void 0 : userInfo.profile) === null || _a === void 0 ? void 0 : _a.age;
const input = "hamuuda";
const output = input !== null && input !== void 0 ? input : 'default';
console.log(output);
let unknownVar = "I am string";
let stringVar = unknownVar.toUpperCase();
const bob = { name: 'Bob', age: 35, permissions: ['read', 'write'] };
const phone = { id: 1, name: 'Iphone 15', description: 'Cool phone' };
const computer = { id: 2, name: 'Computer' };
const config = {
    apiUrl: 'https://enum.google.com/',
    timeout: 5000
};
console.log(config.timeout);
console.log("after");
config.timeout = 6000;
console.log(config.timeout);
function containNumber(arr, item) {
    return arr.includes(item);
}
function containString(arr, item) {
    return arr.includes(item);
}
function containBoolean(arr, item) {
    return arr.includes(item);
}
console.log(containString(['a', 'b', 'c'], "cc"));
function contains(arr, item) {
    return arr.includes(item);
}
let stringItems = ["green", "red", "yellow"];
let numberItems = [1, 2, 3, 4];
contains(numberItems, 3);
contains(stringItems, "green");
const stringPair = { first: "hmUUS", second: "hm" };
const numberPair = { first: 1, second: 100 };
