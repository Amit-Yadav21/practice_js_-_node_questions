const str = 'my name is amit yadav'
const newstr = str.split('').reverse().join('')
// console.log(newstr);
// ------------------------------------------
var inputString = "hello";
var arr = inputString.split("").sort().join('');
// console.log(arr) // ehllo

// ------------------------------------------------reverse string  Using Loop ?
let name1 = "your name is amit"
let newString = ""
for (let i = name1.length - 1; i >= 0; i--) {
    newString += name1[i]
}
// console.log(newString);

// ---------------------------------------------------reverse string Using reduce/map method ?

let st = "amit";
let reversedStr = st.split('').reduce((acc, char) => char + acc);
// console.log(reversedStr);

const str_ = "amit";
const reversed = str_.split('').map((item, index, array) => array[array.length - index - 1]).join('');
// console.log(reversed);   // tima

// ------------------------------------------------------ Conditional (Ternary) Operator 
function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
// console.log(reverseString("hello"));

function reverse1(str) {
    var r = "";
    for (var i = str.length - 1; i >= 0; i--) {
        r += str.charAt(i);
    }
    return r;
}
// console.log(reverse1('amit'));


// ================================================================================ reverse strng self place ?
const data_str = "I LOVE YOU"
let s = data_str.split(" ").map((ele) => ele.split("").reverse().join('')).join(" ")
// console.log(s); 

// ============================= Sepret Capital and Small value ?

let a = 'abcRTY'
let capital = ''
let small = ''
for (let i of a) {
    if (i.toLocaleUpperCase() === i) {
        capital += i
    } else {
        small += i
    }
}
// console.log(`All capital letter here :-${capital}\nAll small letter here :-${small}`);


// --------------------------------------------------- OR ?

// const sr = 'AmiT'
// let capital = ''
// let small = ''
// for(let l of sr){
//     if(l.charCodeAt()>=64 && l.charCodeAt()<92){
//         capital= capital + l
//     }else{
//         small = small+l
//     }
// }
// console.log(capital,small);

// ======================================================================= count dublicate values from string ?
// output :- { a: 3, n: 1, i: 4, k: 1, e: 1, t: 3, w: 1, r: 1, m: 1 }

let take_input = 'anikettiwariamit';
let array = take_input.split('');
// console.log(arr);
let obj = {};
for (let i of array) {
    if (!obj[i]) {
        obj[i] = 0
    }
    obj[i] += 1
}
// console.log(obj);

// ------------------------------------- count dublicate 
function removeDuplicates(str) {
    const charMap = {};
    let result = '';
    for (let char of str) {
        if (!charMap[char]) {
            result += char;
            charMap[char] = true;
        }
    }
    return result;
}
// console.log(removeDuplicates("hello")); // Output: helo
// ================================================================== print number in single line ? 
var empaty_str = "";
for (var i = 1; i <= 20; i += 1) {
    s += i + " ";
}
// console.log(empaty_str);

// ------------------

// var userNo = 1;
// while (userNo <= 10) {
//  console.log(userNo);
//  userNo++;
// }

// ===============================================================

// for ( var i = 1; i <= 5; i++ )
// {
//   if ( i%3 === 0 && i%5 === 0 )
//   {
//     console.log( i + " FizzBuzz" );
//   }
//   else if ( i%3 === 0 ) 
//   {
//     console.log(i+ " Fizz" );
//   }
//   else if ( i%5 === 0 ) 
//   {
//     console.log(i+ " Buzz" );
//   }
//   else if ( i%2 === 0)
//   {
//     console.log(i+ " even number");
//   }
//   else if ( i%2 != 0)
//   {
//     console.log(i+ " odd number");
//   }
// //   else if (i%i === 0)
// //   {
// //     console.log(i+ " prime number");
// //   }
//   else
//   {
//     console.log(i);
//   }
// }

// =============================================
var strData = 'amit yYadav';
var vowels = strData.match(/[aeiou]/gi); // [] is colling range and /g for globle and i for small/capital letter 
var consonants = strData.match(/[^aeiou\s]/gi).length; // (\s) is use to remove space, ^ is a Caret symble use in negative way
// var consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/g);

// console.log(`Vowels: ${vowels}\nConsonants: ${consonants}`);
// --------------------------------------------------
var stri = "amit yadav"
let vow = 0
let conso = 0
let vowels_ = ['a', 'e', 'i', 'o', 'u']
for (ch of stri.toLowerCase()) {
    if (vowels_.includes(ch)) {
        vow++
    }
    else {
        conso++
    }
}
// console.log(`vowels here : ${vow}\nconsonents : ${conso}`);

// -----------------------------------------
// const data = 't'
// if (data == 'a' || data == 'e' || data == 'i' || data == 'o' || data == 'u') {
//     console.log('vowels');
// }
// else {
//     console.log('consonents');
// }

// ======================================== capital every frist letter in word 
const aa = 'my name is amit yadav'
var capitalizedString = aa.replace(/\b\w/g, function (match) {
    return match.toUpperCase();
});
// console.log(capitalizedString);

function convertToTitleCase(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}
console.log(convertToTitleCase("hello world")); // Output: Hello World

function capitalizeWords(str) {
    const words = str.split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
}
// console.log(capitalizeWords("hello world")); // Output: Hello World

// ----------------------------------
var sentence = "this simple approach allows you to capitalize the first letter of every word in a string using a single line of code";
var words = sentence.split(" ");
for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}

var capitalizedSentence = words.join(" ");
// console.log(capitalizedSentence);

// --------------------------
const sen = "this simple approach allows you to capitalize the first letter of every word in a string using a single line of code";
let output = sen.split(' ').map(str => {
    return str[0].toLocaleUpperCase() + str.slice(1)
})
// console.log(output.join(' '));

// ----------------------------------
// Check if a given string is a substring of another string
function isSubstring(sub, str) {
    return str.includes(sub) ? `${sub} is a substring of ${str}` : `${sub} is not a substring of ${str}`;
}
//   console.log(isSubstring("cat", "concatenate")); // Output: cat is a substring of concatenate

//----------------------------------------------- Count the number of vowels in a string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let vowelcount = 0;
    let consonentcount = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            vowelcount++;
        }
        else if (!vowels.includes(char.trim())) {
            consonentcount++;
        }
    }
    return `vowels in ${str} is: ${vowelcount} and consonent is ${consonentcount}`;
}
// console.log(countVowels("Hello World amit")); 

// -------------------------------- Remove all occurrences of a specified character from a string
function removeCharacter(str, char) {
    return str.split(char).join('');
}
// console.log(removeCharacter("hello world", "o")); 