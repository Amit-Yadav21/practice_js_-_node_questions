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