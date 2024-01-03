// ------------------------------
// let current = new Date();
// let today = current.toLocaleDateString('en-IN',{weekday: 'long'});
// console.log(today);
// let currentMonth = current.toLocaleDateString('en-IN', { month: 'long' });
// console.log(currentMonth);


// that gets the current date and time and displays it in a human-readable format (e.g. "Today is Monday, April 12, 2021, and the time is 3:30 PM").
// let DateRead = `Today is ${date.toLocaleDateString("en-IN",{weekday:"long"})}, ${date.toLocaleDateString("en-IN",{month:"long"})} ${date.getDate()}, ${date.getFullYear()}  and the time is ${date.getHours()}:${date.getMinutes()}`;
// console.log(DateRead)

// ------------------------------------------------------------------------------- callback function ?
// var inp = require('readline-sync')
// function callbackFunction(name) {
//     console.log("Hello " + name);
//   }
//   function outerFunction(callback) {
//     let name = inp.question("Please enter your name :- ");
//     callback(name);
//   }
//   outerFunction(callbackFunction);
// --------------------------------------------------------
// amit()
// function amit(){
//     console.log('my name is yadav'); // trun the code 
// }

// console.log(declearFunction());
// const declearFunction = function(){
//     console.log('my city is jaunpur'); // Cannot access 'declearFunction' before initialization
// }
// --------------------------------------------------
// let arr = [1,2,3,4,5];
// for (let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// const arr = [1, 2, 3, 4, 5];
// arr.forEach(function(element) {
//     console.log(element);
// });

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.toString()); // Prints: 1,2,3,4,5
// console.log(arr.join(' ')); // Prints: 1 2 3 4 5 (joined with space)

// const numbers = [1, 2, 3, 4, 5];
// for (let num of numbers) {
//     console.log(num);
// }

// const arr = [1, 2, 3, 4, 5];
// console.log(...arr); // Prints: 1 2 3 4 5 (separate elements)

// -------------------------------------------------------------
// const obj = {name:'amit', age:24, name:'yadav'}
// console.log(Object.values(obj));

// const person = { name: 'John', age: 30 };
// for (let key in person) {
//     console.log(key + ': ' + person[key]);
// }

// const person = { name: 'John', age: 30 };
// const entries = Object.keys(person);
// console.log(entries); // Output: ['name', 'age']

// const person = { name: 'John', age: 30 };
// const values = Object.values(person);
// console.log(values); // Output: ['John', 30]

// const person = { name: 'John', age: 30 };
// const entries = Object.entries(person);
// console.log(entries); // Output: [['name', 'John'], ['age', 30]]
