// =========================== differences between var, let, and const in JavaScript
// In JavaScript, let, var, and const are used to declare variables. These keywords
// 1. Scope:
//     var: Variables declared with var have function-level or global scope. They are hoisted to the top of their function scope.
//     let and const: Variables declared with let and const have block-level scope, limited to the block in which they are defined, or within nested blocks. They are not hoisted to the top of their block scope.
// 2. Hoisting:
//     var Variables declared with var are hoisted to the top of their function scope, allowing them to be used before their actual declaration in the code (though their value will be undefined until assigned).
//     'let' and 'const' Variables declared with let and const are hoisted to the top of their block scope but are in a "temporal dead zone" until the point where they are declared. Accessing them before their declaration results in a ReferenceError.
//     'let' variables are not hoisted to the top of their block scope and are in a "temporal dead zone" until their declaration point.
//     let, const variables are not hoisted and are in a "temporal dead zone" until their declaration point.
// 3. Reassignment:
//     var: Variables declared with var can be redeclared and reassigned.
//     let: Variables declared with let can be reassigned but cannot be redeclared in the same scope.
//     const: Variables declared with const cannot be reassigned after initialization and should be assigned a value upon declaration. They cannot be redeclared or reassigned to a different value.

// ================================================ Closure ? 
//  => A closure is an inner function that has access to the variables in the outer (enclosing) function’s scope chain. The closure has access to variables in three scopes; specifically: (1) variable in its own scope, (2) variables in the enclosing function’s scope, and (3) global variables.

// ======================================== Fatch API calls using the fetch() method
// const fetchAPI = async(URL) => {
// 	const response = await fetch(URL);
// 	const data = await response.json();
// 	console.log(data)
// }
// fetchAPI("https://jsonplaceholder.typicode.com/todos/1")

// =========================================================== Optional Question ?

// What is NaN? What is its type? How can you reliably test if a value is equal to NaN?
// => The NaN property represents a value that is “not a number”
// For one thing, although NaN means “not a number”, its type is, believe it or not, Number:
// console.log(typeof NaN === "number");  // true
// Additionally, NaN compared to anything – even itself! – is false:
// console.log(NaN === NaN);  // false

// Q. What does the setTimeout() function do in JavaScript?
// a)) It schedules the execution of a function after a specified delay (this is the right ans) ✅
// b) It sets the value of a variable after a specified delay
// c) It pauses the execution of the JavaScript code for a specified duration
// d) It defines a function that can be executed repeatedly at specified intervals

// Q. Which of the following statements is true about arrow functions in JavaScript?
// a) Arrow functions are longer and more complex than regular functions.
// b) Arrow functions cannot be used in callbacks
// c)) Arrow functions do not have a lexical this context. (this is the right) ✅
// d) Arrow functions cannot be used as methods within objects

// What is the purpose of the map() method in JavaScript arrays?
// a)) To iterate through all elements of an array and return a new array with modified elements (this the right ans) ✅
// b) To filter out elements that don't match a given condition.
// c) To remove specific elements from an array based on a condition.
// d) To sort the elements of an array in descending order.

// Q. What does the term "callback function" refer to in JavaScript?
// a) A function that is called automatically when the page loads
// b)) A function that is invoked when an event occurs or a task is completed (this is the right ans) ✅
// c) A function that only accepts callbacks as arguments.
// d) A function that returns another function

// Q. What is the purpose of the querySelector() method in JavaScript?
// a) To select all elements with a specific tag from the DOM
// b)) To select the first element with a specific class from the DOM (this is the right ans) ✅
// c) To create a new DOM element with the specified tag
// d) To modify the contents of the selected element.

// What is the purpose of the localStorage object in JavaScript?
// a)) To store data in the user's browser for persistent client-side storage. (this is the right ans) ✅
// b) To store data on the server for long-term persistence.
// c) To store variables temporarily during the execution of a function.
// d) To store sensitive information such as passwords.

// Q. What does the term "prototype" refer to in JavaScript?
// a)) An object that is linked as a property to other objects, allowing shared methods and properties ✅
// b) A special keyword that indicates a function.
// c) The initial state of an object before modifications.
// d) A built-in object for creating new objects.

// Q. What is the purpose of the Promise object in JavaScript?
// a) To create and manage multiple threads in a JavaScript application.
// b)) To manage asynchronous operations and handle their results or errors. ✅
// c) To optimize code for better performance.
// d) To control the execution order of synchronous code

// Q. Which of the following is a valid way to declare a JavaScript function?
// a)) function =myFunction() {} ✅
// b) const myFunction = function() =>{}
// c) var function= myFunction() =>{}
// d) def myFunction(){}
// Note :-------------------------
// const myFunction = function() =>{}: This is an arrow function declaration with incorrect syntax. It should be written as either const myFunction = () => {} for an arrow function or function myFunction() {} for a regular function declaration.
// var function = myFunction() =>{}: This attempts to declare a function using an arrow function syntax but also incorrectly tries to assign it to a variable named function, which is a reserved keyword in JavaScript and cannot be used as a variable name.
// def myFunction(){}: The def keyword is not used for function declaration in JavaScript. In JavaScript, the function keyword is used to declare functions, not def.

// Q. What does the term "scope" refer to in JavaScript?
// a)) The set of rules that determine the visibility and accessibility of variables in different parts of the code ✅
// b) The act of organizing code into separate files for better maintainability
// c) The physical location of a variable in memory
// d) The process of minifying JavaScript code for better performance

// Q. What is the purpose of the Array.prototype.forEach() method in JavaScript?
// a)) To loop through the elements of an array and execute a provided function for each element ✅
// b) To create a new array by applying a function to each element of the original array
// c) To sort the elements of an array in ascending order
// d) To filter out elements from an artay that do not match a given condition
// Note:-----------------------------------------------------------------------------
// The forEach() method iterates over each element of an array and allows you to execute a provided function once for each element without creating a new array. It is particularly useful when you want to perform an action or operation on each item in the array without creating a new array based on the return values.

// Q. What is the result of the following expression? "Hello" instanceof String:
//      a)  TRUE    b) Error    c) undefined    d)) FALSE ✅
// Note:------------------------------------------------------
// In JavaScript, the instanceof operator checks whether an object is an instance of a particular class or constructor. When you use the instanceof operator with a primitive value like "Hello" and a built-in object like String, it returns false.
// The reason behind this outcome is that "Hello" is a primitive string value, not an instance of the String object. Primitive string values (like "Hello") are not objects; they are automatically converted to a String object when you perform operations or access properties/methods on them, but they don't behave as instances of the String constructor.
// Therefore, "Hello" instanceof String returns false because "Hello" is a primitive string value, not an instance of the String object.

// Q. What is the purpose of the Array.prototype.map() method in JavaScript?
// a)) To iterate through all elements of an array and return a new array with modified elements. ✅
// b) To remove specific elements from an array based on a condition
// c) to sort the elements of an array in descending order
// d)To filter out elements that don't match a given condition

// Q. What is the purpose of the Array.isArray() method in JavaScript?
// a)) To check if a given value is an array ✅
// b) To sort the elements of an array
// c) To reverse the elements of an array
// d) To convert an array to a string
// Note:-
// The Array.isArray() method is used to determine whether a given value is an array or not. It returns true if the value is an array and false if it is not.

// Q. What will be the output of the following code? const x = 10;
// function foo() {
// console.log(x):
// const x = 20:
// foo():
// a) undefined    b) 10       c) 20       d))ReferenceError ✅

// Q. Which of the following methods is used to remove an element from a specific index in an array?
// a) remove()
// b)) splice() ✅
// c) detach
// d) slice 

// Q. What is the purpose of the new keyword when creating objects in JavaScript?
// a) It is used to define a new variable.
// b) It is used to import external libraries.
// c)) It is used to create a new instance of an object constructor or class ✅
// d) It is used to declare a new function
// Note :--------------------------------------
// In JavaScript, the new keyword is used with constructor functions or classes to create a new instance of an object based on that constructor or class blueprint. When you use new followed by a constructor function or class name, it allocates memory for a new object, sets up a link to its prototype, and calls the constructor function to initialize properties or perform setup tasks if defined within the constructor.

// Q . Which of the following statements is true regarding the setTimeout() function in JavaScript?
// a) It sets the value of a variable after a specified delay.
// b) It defines a function that can be executed repeatedly at specified intervals.
// c) It pauses the execution of the JavaScript code for a specified duration.
// d)) It schedules the execution of a function after a specified delay ✅

// Q. What is the purpose of the isNaN() function in JavaScript?
// a) To check if a value is null or undefined.
// b)) To check if a value is not a number ✅
// c) To convert a value to a number data type
// d) To create a new number with a specified value
// Note:----------------------------------------------
// The isNaN() function is used to determine whether a value is "Not-a-Number" (NaN) or not. It returns true if the provided value is not a valid number or cannot be converted into a number; otherwise, it returns false

// Q .What is the purpose of the Object.keys() method in JavaScript?
// a) To convert an object to an array.
// b)) To extract all properties from an object. ✅
// c) To extract keys and values from an object as key-valüe pairs
// d) To extract all values from an object
// Note:-------------------------------------------
// To extract all keys (property names) from an object and return them as an array.
// The Object.keys() method is used to extract and retrieve the keys (property names) of an object.

// Q. What does the term "event delegation" refer to in JavaScript?
// a) The process of passing an event to multiple elements.
// b) The process of binding an event listener to a specific element
// c)) The process of placing a single event listener on a common ancestor of multiple elements ✅
// d) The process of triggering multiple events simultaneously
// Note:- -----------------------------------------------------------
// Event delegation is a technique used to handle events efficiently, especially when dealing with multiple similar elements within a container or a group. Instead of attaching an event listener to each individual element, you attach a single event listener to a higher-level or common ancestor element that contains these elements.

// Q. Which of the following is a correct way to create an empty object in JavaScript?
// a)) let obj={} ✅
// b) object.empty()
// c) new Object()
// d) empty object()
// Note:----------------------
// object.empty() is not a valid method for creating an empty object. It seems to be a hypothetical or undefined method.
// new Object() is a valid way to create an empty object using the Object constructor. However, using object literal notation ({}) is the more commonly used and preferred method for creating objects.
// empty object() is not a valid syntax in JavaScript for creating an empty object.

// Q. What does The fetch() function in JavaScript primarily do?
// a)) It fetches resources from a network asynchronously ✅
// b) It fetches data from a database
// c) It fetches a web page's source code
// d) It fetches a list of available libraries.
// NOte:-------------------------------------
// The fetch() function is used to make network requests and retrieve resources (such as JSON data, text, HTML, etc.) from a server or an API asynchronously. It is commonly used to perform HTTP requests, such as fetching data from a remote server or sending data to a server.
// This code uses fetch() to make an asynchronous HTTP GET request to https://api.example.com/data and handles the response, parsing it as JSON and logging it to the console.

// Q. What is the purpose of the try...catch statement in JavaScript?
// a)) To handle errors and exceptions that may occur in a block of code ✅
// b) To execute a block of code repeatedly.
// c) To define a loop that iterates over an array
// d) To stop the execution of a program
// Note:---------------------------------
// The try...catch statement allows you to attempt executing a block of code that might potentially throw an error or exception. If an error occurs within the try block, the execution is immediately transferred to the catch block, where you can handle and manage the error gracefully without interrupting the entire script execution.
// The try...catch statement is a crucial part of error handling in JavaScript, allowing developers to manage and handle unexpected errors, preventing them from causing the entire script to fail.

// Q. What is the purpose of the Array.prototype.unshift() method in JavaScript?
// a)) To add elements to the beginning of an array. ✅
// b) To reverse the order of elements in an array.
// c) To add elements to the end of an array

// Q. Which of the following is true regarding JavaScript's event loop?
// a)) The event loop manages asynchronous operations and ensures they execute in a single thread ✅
// b) The event loop is an external library that needs to be imported to handle events
// c) The event loop allows JavaScript to handle multithreading for better performance
// d) The event loop is responsible for rendering HTML elements on the web page
// NOte:-----------------------------------------------------------------------
// In JavaScript, the event loop is a mechanism that handles asynchronous operations by managing the execution of code in a single-threaded environment.
// JavaScript is single-threaded, meaning it can execute only one piece of code at a time in a single thread. The event loop allows asynchronous operations, such as setTimeout, Promises, and callback functions, to be executed without blocking the main thread.
// It handles the execution of these asynchronous tasks by placing them in a queue and processing them in the order they were added, once the call stack is empty.
// This mechanism allows JavaScript to efficiently handle asynchronous operations, making it non-blocking and responsive, even though it runs in a single-threaded environment.

// Q. What does the term "strict mode" refer to in JavaScript?
// a) A feature that enables better performance by optimizing code execution
// b) A way to enable additional logging for debugging purposes.
// c)) A way to catch common coding mistakes and "unsafe" actions in your code ✅
// d) A method of enforcing strict security measures in web applications
// Note:--------------------------------------------------------------------
// Strict mode is a feature in JavaScript that helps programmers write more robust and less error-prone code by enforcing stricter rules and generating errors for certain coding practices that might be considered unsafe or problematic. It aims to prevent common mistakes and create a safer environment for writing JavaScript code.
// When strict mode is enabled using the directive "use strict"; at the beginning of a script or a function

// Q. Which of the following is true regarding the global this context in JavaScript?
// a) The global this context always refers to the function that contains it
// b) The value of this in the global scope depends on how the function is invoked
// c)) In the global scope, this refers to the global object (eg, window in browsers) ✅
// d) In the global scope, this is undefined and cannot be used

// Q. What is the purpose of the Object.prototype.hasOwnProperty() method in JavaScript?
// a) It removes a property from an object
// b)) It checks if an object has a specific property ✅
// c) None of all
// d) It creates a new property in an object
// Note:---------------------------------------------------
// The hasOwnProperty() method is used to determine whether an object has a property with a specified key as its own property (not inherited from its prototype chain). It returns a boolean value (true or false) based on whether the object contains the specified property as a direct property of that object.
// const person = {
//     name: 'Alice',
//     age: 25
// };
// console.log(person.hasOwnProperty('name')); // Output: true
// console.log(person.hasOwnProperty('gender')); // Output: false

// Q. What is the Call Stack in the context of the event loop?
// a)) It is a stack data structure that keeps track of function calls. ✅
// b) It is a queue that holds asynchronous tasks
// c) It is a data structure used to store event listeners
// d) It is a mechanism to prevent infinite loops
// Note :---------------------------------------------
// The Call Stack in JavaScript is a data structure that tracks function calls during the execution of a program. It follows the Last-In-First-Out (LIFO) principle, similar to a stack, where functions are pushed onto the stack when called and popped off the stack when they complete their execution.
// When a function is invoked, a new frame representing that function call is pushed onto the top of the call stack. As functions complete their execution, their frames are removed (popped) from the stack.
// The event loop, another part of JavaScript's runtime environment, works in conjunction with the call stack to handle asynchronous operations, timers, and callbacks by placing certain tasks in different queues (such as the task queue or microtask queue) and executing them once the call stack is empty.

// Q. What is the Callback Queue (also known as the Task Queue) in the context of the event loop?
// a) It is a queue that holds completed HTTP requests
// b)) It is a queue that holds pending asynchronous tasks and their associated callbacks ✅
// c) It is a queue that holds the results of asynchronous operations
// d) It is a queue that holds the arguments passed to event listeners
// Note:------------------------------------------------------------------
// The Callback Queue (or Task Queue) is a queue-like data structure that holds pending asynchronous tasks along with their associated callback functions. When asynchronous tasks (such as setTimeout, I/O operations, or other asynchronous APIs) complete, they are placed in the Callback Queue along with their respective callback functions.
// When the call stack becomes empty (i.e., all synchronous code has been executed), the event loop checks the Callback Queue. If there are tasks waiting in the Callback Queue, the event loop moves them from the Callback Queue to the call stack for execution. This process allows the asynchronous tasks to be executed in the order they were completed.
// The Callback Queue is an essential part of managing the execution order of asynchronous tasks in JavaScript, ensuring that they are executed only when the call stack is empty, preventing blocking of the main thread, and allowing non-blocking asynchronous operations to be handled appropriately.

// Q. What is the role of the Event Loop in managing asynchronous operations?
// a) If ensures that asynchronous tasks are executed in the order they are defined
// b)) It allows asynchronous tasks to be executed in a single thread, maintaining the order of execution ✅
// c) Il prevents asynchronous tasks from running concurrently
// d) It runs asynchronous tasks on a separate thread to achieve parallelism
// Note :-----------------------------------------------------------------------------
// The Event Loop in JavaScript is responsible for handling asynchronous operations in a non-blocking manner within a single-threaded environment. It manages the execution of asynchronous tasks by continuously checking the call stack for pending tasks and processing them accordingly.
// Asynchronous tasks, such as callbacks from setTimeout, AJAX requests, or other asynchronous APIs, are not executed immediately. Instead, they are placed in a queue (Callback Queue or Task Queue) once completed, along with their respective callback functions.

// Q. What is the purpose of the microtask queue in the event loop?
// a) It holds asynchronous tasks that are scheduled to execute after a specified delay.
// b) It holds tasks with higher priority than those in the callback queue
// c)) It holds tasks related to promises and other microtasks, ensuring their execution order ✅
// d) It holds tasks that are processed before the next rendering of the web page
// Note :------------------------------------------------------------------------------
// The microtask queue is a separate queue in the event loop that specifically holds tasks related to microtasks, such as promise callbacks (then(), catch(), finally()), mutation observers, and other similar tasks designated as microtasks.
// Tasks in the microtask queue have higher priority than those in the regular callback queue (macrotasks). When the call stack becomes empty, the event loop checks the microtask queue before handling tasks from the regular callback queue (task queue)

// Q. What happens when an asynchronous task is completed and its callback is added to the Callback Queue?
// a) The callback is executed only if it has a higher priority than other callbacks.
// b)) The callback is executed once the call stack becomes empty ✅
// c) The callback is executed only if there are no other tasks in the Callback Queue
// d) The callback is immediately executed by the event loop 

// Q. What does the term "hoisting" refer to in JavaScript?
// a) Automatically optimizing code for faster execution
// b) Moving all JavaScript code to the top of the HTML document
// c)) Declarations are moved to the top of their scope before code execution ✅
// d) Organizing variables in a hierarchical order for better code readability
