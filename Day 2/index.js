
// DAY2  interview questions 


// 1.What are objects in javascript?
// 2.What are function?
// 3.What is an event loop and call stack.
// 4.What is the DOM?
// 5.Difference between undefined vs not defined vs NaN
// 6.What are arrow functions?
// 7.What is the for-in loop in JavaScript? Give its syntax
// 8.Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript
// 9.What is difference between null and undefined and where to use what?
// 10.Write code to explain map and filter in arrays
// 11.Given an array of 0's and 1's find out number of 0's
// 12.Given an array find out total no. of odd and even nos.
// 13.Given a string find out number of vowels



//************************************************************************************************************************************************************************************************************** */

// Solution no. 13 :Given a string find out number of vowels

            function Count_Vowels(S) {
                const vowels = "AEIOUaeiou"; 
                let count = 0;
            
                
                for (let char of S) {
                    if (vowels.includes(char)) {
                        count++; 
                    }
                }
            
                return count; 
            
            }
            console.log(Count_Vowels("Hello world"));


//**************************************************************************************************************************************************************************************************************************** */

// Solution no. 12: Given an array find out total no. of odd and even nos.


function count_odd_even() {
    let arr = [1,2,3,4,5]
    let odd = 0;
    let even = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even++;
            } else {
                odd++;
                }
                }
                return [odd, even];
                }
                console.log(count_odd_even());



//**************************************************************************************************************************************************************************************************************** */


// Solution no. 11: Given an array of 0's and 1's find out number of 0's 

function countZeroes(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            count++;
            }
            }
            return count;
            }
            console.log(countZeroes([1, 0, 1, 0, 1]));


//********************************************************************************************************************************************************************************************************************* */

// Question no. 10: Write code to explain map and filter in arrays

   const numbers = [1, 2, 3, 4, 5];
   const doubledEvens = numbers.filter(num => num % 2 === 0).map(num => num * 2);           

   console.log(doubledEvens);


//******************************************************************************************************************************************************************************************************************************************* */
   
// Question no. 9 : What is difference between null and undefined and where to use what?

// In JavaScript, null and undefined are both used to represent "absence of value," but they have different meanings and uses.
// null is used to represent the intentional absence of a value, whereas undefined is used to represent an uninitialized or unknown value.
 
// 1. undefined
// Definition: A variable that has been declared but has not yet been assigned a value is undefined.
// Type: undefined is a type and also a value in JavaScript.
// Usage: JavaScript automatically assigns undefined to variables that have not been given a value. 
// It is also used to represent the absence of a value in a function or method that has not been
// implemented.


// 2. Null 
// Definition: null is a primitive value that represents the absence of any object value.
// Type: null is a type and also a value in JavaScript.
// Usage: null is used to represent the absence of an object value. It is often used to
// indicate that a variable does not reference an object.

// null
// Definition: null represents an intentional absence of any object value.
// Type: null is an object type.
// Usage: null is usually set by the programmer to indicate that a variable is empty or should point to no object.


//****************************************************************************************************************************************************************************************************************************** */


// solution no.8:Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript

// In JavaScript, scope determines where variables and functions are accessible within the code.

// 1. lexical scope:
// A variable has local scope if it is defined within a function. 
// This means that the variable is only accessible within that specific function and is not accessible outside of it.

// 2. Block Scope: 

// Variables declared with let and const are block-scoped. A block is defined by { }, typically seen in conditionals, loops, and functions. 
// Block-scoped variables are only accessible within the specific block where they are defined.

// 3. Functional scope:

// Functional scope applies to variables declared with var inside a function. 
// A variable declared with var inside a function is accessible anywhere within that function, but not outside of it.


// 4. Scope Chain:

//The scope chain is the hierarchy of scopes that JavaScript uses to look up variables. 
// When a variable is referenced, JavaScript searches for it in the current scope, then in successive outer (or parent) scopes, until it reaches the global scope. 
// If it doesn’t find the variable anywhere in the scope chain, it throws a ReferenceError.



//************************************************************************************************************************************************************************************************************************************ */

// Solution no. 7: What is the for-in loop in JavaScript? Give its syntax

// The for...in loop in JavaScript is used to iterate over the enumerable properties of an object. It allows you to access each key (or property name) of an object in turn. 
// Unlike forEach or for...of loops, which are typically used with arrays, for...in is best suited for objects.

// Syntax 
 
for (key in object) {
    // code to execute for each property
}



//****************************************************************************************************************************************************************************************************************************************************** */

// Solution no.6: What are arrow functions?

// Arrow functions in JavaScript are a shorthand way of writing functions, introduced in ES6 (ECMAScript 2015). 
//They provide a more concise syntax, making your code cleaner and more readable. 
//Arrow functions also handle the this keyword differently than traditional functions, 
//which can be beneficial in certain contexts, especially within methods and callbacks.

// Syntax: 

// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;


//********************************************************************************************************************************************************************************************************************************************************************** */

// Solution no. 5: Difference between undefined vs not defined vs NaN 

// 1. undefined

// Definition: undefined is a built-in JavaScript value assigned to variables that have been declared but not assigned a value.
// Type: undefined has its own data type.
// Typical Usage: JavaScript automatically assigns undefined to variables that are declared without an initial value.

// example : 
let x;
console.log(x); // Output: undefined



// 2. Not Defined"

// Definition: "Not defined" is a runtime error, occurring when you try to access a variable that hasn’t been declared at all in the code. 
// JavaScript throws a ReferenceError in this case.
// Error Type: ReferenceError.
// Usage: Unlike undefined, which is an actual value that signifies "lack of assignment," "not defined" means the variable itself is missing from the scope.

// example : 
console.log(y); // Output: ReferenceError: y is not defined



// 3. NaN (Not-a-Number)

// Definition: NaN is a special numeric value that stands for "Not-a-Number." It signifies that an operation that was supposed to produce a number has failed to do so.
// Type: number. Although NaN represents an invalid number, it’s still of type number.
// Usage: NaN is the result of invalid mathematical operations, such as dividing zero by zero or attempting to convert a non-numeric string to a number.


// example:  
console.log(0 / 0);            // Output: NaN
console.log(Number("Hello"));   // Output: NaN


//************************************************************************************************************************************************************************************************************************************************************* */

// Solution no. 4: What is the DOM? 

// The DOM (Document Object Model) is a programming interface for web documents. 
// In JavaScript, the DOM represents the HTML or XML content of a webpage as a structured tree of objects, allowing JavaScript to access, modify, and interact with the content and structure of the page.
// The DOM is a crucial part of web development, enabling JavaScript to dynamically update the content of a webpage, respond to user interactions, and create interactive web applications.


//****************************************************************************************************************************************************************************************************************************************************************************** */

// Solution no.3: What is an event loop and call stack.

// The Event Loop and the Call Stack are fundamental concepts in JavaScript’s concurrency model. 
// They help JavaScript handle asynchronous tasks and manage the order in which code is executed, even though JavaScript is a single-threaded language

// 1. Call Stack

// The Call Stack is a data structure used to keep track of the function calls in JavaScript. 
// Every time a function is called, it’s added to the top of the call stack, and when the function finishes, it’s removed from the stack. 
// JavaScript executes code from the top of this stack, following a Last In, First Out (LIFO) approach.


// 2. Event Loop

// The Event Loop is a mechanism that manages asynchronous operations in JavaScript. 
// Since JavaScript is single-threaded, the event loop allows it to handle multiple tasks like user interactions, network requests, and timers without blocking other code execution.


//********************************************************************************************************************************************************************************************************************************************************************* */


// Solution no. 2: What are function?
 
// In JavaScript, a function is a block of code designed to perform a specific task. 
// Functions allow you to write reusable pieces of code, making your code more organized, modular, and easier to maintain. 
// You can define a function once and call it multiple times throughout your code.

// syntax : 

function functionName(parameters) {
    // Code to execute
}



//******************************************************************************************************************************************************************************************************************************************************************************************* */

// Solution 1: What are objects in javascript? 

// In JavaScript, objects are a way to store and organize data in a structured format. 
// An object is a collection of key-value pairs (also called properties), where each key is a string (referred to as the property name), and each value can be any data type, including numbers, strings, arrays, or even other objects. 
// Objects are one of the core building blocks in JavaScript and are essential for working with complex data structures.

// example : 

const person = {
    name: "Alice",
    age: 30,
    isEmployed: true
};
