const timeConvert = num => Math.floor(num / 60) + ':' + (num % 60);
// console.log(timeConvert(126)); // Output: 2:6

const time_Convert = num => `${Math.floor(num / 60)}:${num % 60}`;
// console.log(time_Convert(126)); // Output: 2:6

let totalMinutes = 126;
let hours = Math.floor(totalMinutes / 60); // Calculate the hours by dividing total minutes by 60 and rounding down
let minutes = totalMinutes % 60; // Calculate the remaining minutes after getting the hours
// console.log(hours + ":" + minutes);

function TimeConvert(num) {
    return Math.floor(num / 60) + ":" + (num % 60);
}
// console.log(timeConvert(126)); // Output: 2:6

function TimeConvert(num) {
    return `${Math.floor(num / 60)}:${num % 60}`;
}
// console.log(timeConvert(126)); // Output: 2:6

function Time_Convert(num) {
    let hours = Math.floor(num / 60); // Calculate the hours
    let minutes = num % 60; // Calculate the remaining minutes

    return hours + ":" + minutes;
}
// console.log(Time_Convert(126)); // Output: 2:6


let current = new Date();
let today = current.toLocaleDateString('en-IN',{weekday: 'long'});
let currentMonth = current.toLocaleDateString('en-IN', { month: 'long' });
// console.log(today);
// console.log(currentMonth);

// that gets the current date and time and displays it in a human-readable format (e.g. "Today is Monday, April 12, 2021, and the time is 3:30 PM").
// let DateRead = `Today is ${date.toLocaleDateString("en-IN",{weekday:"long"})}, ${date.toLocaleDateString("en-IN",{month:"long"})} ${date.getDate()}, ${date.getFullYear()}  and the time is ${date.getHours()}:${date.getMinutes()}`;
// console.log(DateRead)