// 28/11/24 


// Day 4

// QUESTIONS *****************************************************************************


// What are objects in javascript?
// What are function constructors?
// Give an example of inheritance using function constructor

// What is the use of setTimeout

// What are promises and why do we need them?
// What is the purpose of async/await keywords?
// What is callback hell
// What is promise?
// What are arrow functions?
// Give an example of async/await

// What is difference between null and undefined and where to use what?

// Write code to explain map and filter in arrays

// Given an array of 0's and 1's find out number of 0's
// Given an array find out total no. of odd and even nos.
// Given a string find out number of vowels 
// Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same

//********************************************************************************************************************************************************************888 */


// SOLUTIONS 


//// // //  What are objects in javascript?

//  An object is a collection of properties, and a property is an association between a name (or key) and a value. 
//  A property's value can be a function, in which case the property is known as a method.

//  Objects are one of the most fundamental data structures in JavaScript, and they allow you to model and organize complex data.

//  Key Features of Objects in JavaScript:
//  Properties: Key-value pairs that define the object.

//   1. The key is a string (or symbol).
//   2. The value can be any data type.

//  const person = {
//      name: "Alice",
//     age: 30,
//      isStudent: false
//  };
//  console.log (person);


// // //............................................2.............................................................................


// // // A constructor function is a special type of function in programming that is used to create objects. 
// // // It is typically used in object-oriented programming languages like JavaScript. //
// // //The purpose of a constructor function is to set the initial values or properties of an object when it is created.


// // function Person(name, age) {
// //     this.name = name;
// //     this.age = age;
// // }
// //   const person1 = new Person("diksha", 25);
// //   const person2 = new Person("tushar", 25);
  
// //   console.log(person1); 
// //   console.log(person2); 

// //   //..............................................3....................................................................

// //   function Employee(name, age, gender, id) { 
// //     this.name = name; 
// //     this.age = age; 
// //     this.gender = gender; 
// //     this.id = id; 
// // }; 
  
// // function Developer(name, age, gender, id,  
// // specialization) { 
  
    
// //     Employee.call(this, name, age, gender, id); 
  
   
// //     this.specialization = specialization; 
// // } 
// // console.log(Employee.prototype); 
// // console.log(Developer.prototype);
// // //...........................................................4.....................................................
// // // setTimeout function is used to execute a block of code or a function after a specified delay (in milliseconds). 
// // // It is part of the browser's Web API and operates asynchronously, allowing the main thread to continue executing other code without being blocked.


// // function greet(name) {
// //     console.log(`Hello, ${name}!`);
// // }

// // setTimeout(greet, 3000, "diksha");

// // //.....................................................5.....................................

// // //Promises are used in JavaScript to handle asynchronous operations. 
// // //They offer a way to handle errors and outcomes of asynchronous functions, such as those used in AJAX requests or multi-step tasks. 
// // //Promises provide an object that describes the status of a task and the ability to chain methods.


// // const myTask = () => {
// //     return new Promise((resolve, reject) => {
    
// //       setTimeout(() => {
    
// //         if (conditionMet) {
// //           resolve("The task succeeded")
// //         } else {
// //           reject("The task failed")
// //         }
// //       }, 1000);
// //     });
// //   }
  
// //   myTask()
// //     .then(res => console.log(res))
// //     .catch(err => console.log(err))

// //     //..............................................5.........................................

// //     //  An async function declaration creates an AsyncFunction object. 
// //     //Each time when an async function is called, it returns a new Promise which will be resolved with the value returned by the async function, or rejected with an exception uncaught within the async function.
// //  //Async functions can contain zero or more await expressions. 
// //   //Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected. The resolved value of the promise is treated as the return value of the await expression. 
// //   //Use of async and await enables the use of ordinary try / catch blocks around asynchronous code.


// //   async function example() {
// //     return "Hello, World!";
// //   }
  
// //   example().then(result => console.log(result));


// //   //..................................................6....................................

//   Callback Hell refers to a situation in JavaScript where multiple nested callbacks (functions passed as arguments to other functions) become deeply indented and difficult to manage. 
//   This typically occurs in asynchronous code, where one callback relies on the completion of another, leading to a chain of nested functions. 
//  The result is code that is hard to read, maintain, and debug.
 

// //   // ..............................................7................................................
//   A promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation. 
//  It is used for handling asynchronous operations, such as making API calls or reading files, in a more organized and readable way.


// // //...............................................8..............................................................


//  An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

//  Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
//  Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
//  Arrow functions cannot use yield within their body and cannot be created as generator functions.


//  const add = (a, b) => {
//      return a + b;
//    };
  
//    console.log(add(3, 4)); 

//  .....................................9..........................................................



//  const fetchData = () => {
//      return new Promise((resolve, reject) => {
//        setTimeout(() => {
//          const data = { name: "diksha", age: 30 };
//          resolve(data); 
//        }, 2000);
//      });
//    };
  

//    const getUserData = async () => {
//      try {
//        console.log("Fetching data...");
//        const data = await fetchData(); 
//        console.log("Data received:", data); 
//      } catch (error) {
//        console.error("Error:", error);
//      }
//    };
  
//    getUserData(); 
  
// ......................................................10...............................................

//    undefined :-
//  undefined is a primitive value automatically assigned to variables in certain situations:
//  Uninitialized Variables: A variable that is declared but not initialized will have the value undefined.
//  Missing Function Return: If a function does not explicitly return a value, it returns undefined by default.
//  Non-Existent Object Properties or Array Elements: Accessing an object property or an array element that does not exist results in undefined.



//  let x; 
//  console.log(x); 

//  function doSomething() {
 
//  }
//  console.log(doSomething());

//  let obj = {};
//  console.log(obj.property);


//  NULL  
//  Null:-
//  null is a special value in JavaScript that represents the deliberate absence of any object value. It is often used to:
//  Indicate “No Value”: null explicitly shows that a variable or object property should have no value.
//  Reset or Clear Variables: Use null to reset a variable or remove its reference to an object.


//  let y = null; 
//  console.log(y); 

//  let obj = { property: null }; 
//  console.log(obj.property); 



// ...........................................11...................................................

// const array = [1, 0, 1, 0, 1, 0, 0, 1, 0];
// const countZeros = array.filter(num => num === 0).length;
// console.log(countZeros);  


//  ..............................12.........................................

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let evenCount = 0;
// let oddCount = 0;


// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 === 0) {
//     evenCount++;  
//   } else {
//     oddCount++;  
//   }
// }

// console.log("Even numbers:", evenCount);  
// console.log("Odd numbers:", oddCount);  


//......................................................... 13..............................................

const countVowels = (s) => {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (const char of s) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
};

const s = "Hello World";
console.log(countVowels(s));


//........................................................14.....................................................


const object1 = {
    name: "Object 1",
    arr: [1, 2, 3, 4]
  };
  
  const object2 = {
    name: "Object 2",
    arr: [1, 2, 3, 4]
  };
  
  
  function areArraysIdentical(obj1, obj2) {
    
    if (obj1.arr.length !== obj2.arr.length) {
      return false;
    }
  
   
    for (let i = 0; i < obj1.arr.length; i++) {
      if (obj1.arr[i] !== obj2.arr[i]) {
        return false;
      }
    }
  
    return true;  }
  
  
  const result = areArraysIdentical(object1, object2);
  console.log("Are arrays identical?", result);  
  