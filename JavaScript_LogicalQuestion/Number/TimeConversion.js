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

// let num1 = 3;
// let num2 = 2;
// let result = num1 / num2;
// let decimalPart = result - Math.floor(result);
// console.log(decimalPart);

// let num1 = 3;
// let num2 = 2;
// let result = num1 / num2;
// let convert = result.toString()
// let afterDecimal = convert[convert.length -1] 
// console.log(afterDecimal);

// let num1 = 3;
// let num2 = 2;
// let result = num1 / num2;
// let decimalPart = result % 1;
// console.log(decimalPart);

// last number ?
// let num =123
// let last = num.toString().split('').pop();
// console.log(last);

// let number = 12345;
// let lastDigit = number % 10;
// console.log(lastDigit);

// let number = 12345;
// let lastDigit = parseInt(number.toString().slice(-1));
// console.log(lastDigit);

// let number = 12345;
// let lastDigit = Math.abs(number) % 10;
// console.log(lastDigit);

// function reverse(a) {
//     let reversedString = Math.abs(a).toString().split('').reverse().join(',');

//     if (a < 0) {
//         reversedString = '-' + reversedString;
//     }
//     console.log(reversedString);
// }
// reverse(-123)