// Javascript interview questions (Day 1)


// Question no. 1: Difference between " == " and " === " operators.

// ans: " == " (Equality Operator):

// This operator compares two values for equality but does not check the data type.
// JavaScript performs type coercion, meaning it converts the values to the same type before making the comparison.

// " === " (Strict Equality Operator):

// This operator compares both value and type.
// No type conversion is performed; if the types are different, it will return false immediately.


// Question no.2: What is the difference between var, let and const ?

// ans: In JavaScript, var, let, and const are used to declare variables, but they have key differences in terms of scope, hoisting, and mutability:

// 1. var : Scope: var is function-scoped, meaning it is accessible throughout the function it is declared in, even before its declaration due to hoisting. If declared outside a function, it is globally scoped.

// Hoisting: Variables declared with var are hoisted to the top of their scope, meaning they are available before the line where they are declared, but they are initialized as undefined.

// Redeclaration: You can redeclare a variable using var within the same scope.

// 2. let : 

// Scope: let is block-scoped, meaning it is only accessible within the block {} in which it is defined. It cannot be accessed outside of that block.

// Hoisting: Like var, let is hoisted, but it is not initialized. This means that accessing a let variable before its declaration results in a ReferenceError.

// Redeclaration: You cannot redeclare a variable with let in the same scope.


// 3.  const:

// Scope: const is also block-scoped, just like let.

// Hoisting: It is hoisted but not initialized, so accessing it before declaration throws a ReferenceError.

// Immutability: Variables declared with const are constant and cannot be reassigned, but their contents (such as objects and arrays) can still be modified.

// Redeclaration: You cannot redeclare a const variable in the same scope.



// Question no.3 : What is execution context in javascript ?

// ans: In JavaScript, an execution context is an abstract concept that represents the environment in which JavaScript code is evaluated and executed.
// It includes variables, objects, and the current value of this. 
// Whenever a function or global code is executed, an execution context is created. 
// Understanding execution context is crucial to grasp how JavaScript manages variable scoping, this binding, and function execution.



// Question no. 4: What is creation phase and execution phase in javascript ?

// ans: In JavaScript, when the code is executed, it goes through two main phases: the Creation Phase and the Execution Phase. 
// These phases are part of how the JavaScript engine handles the execution context (whether global or function level).

// 1. Creation Phase:
// The creation phase occurs when the JavaScript engine first starts to interpret your code, but before any code is actually executed. 
// During this phase, the engine sets up the environment that will be used during execution.

// 2.  Execution Phase:
//  Once the creation phase is complete, the JavaScript engine moves to the execution phase, where the code is executed line by line. 

// Summary:
// Creation Phase: Sets up the environment by hoisting variables and functions, initializing this, and creating the lexical environment. 
// Variables declared with var are set to undefined, while let and const are in the "temporal dead zone."
// Execution Phase: Executes the code line by line, assigns values to variables, and performs operations based on the code logic.



// Question no.5: What is hoisting ?

// ans: Hoisting in JavaScript is a mechanism where variable and function declarations are moved to the top of their containing scope (either the global scope or the function scope) during the creation phase of the execution context. 
// This happens before the actual code is executed, allowing variables and functions to be used before they are explicitly defined in the code.

// However, it's important to note that only the declarations are hoisted, not the initializations (for variables).



// Question no.6: Difference between undefined vs not defined vs NaN ?

// ans: In JavaScript, the terms undefined, not defined, and NaN represent different states of variables or expressions. 
// Here's a breakdown of their meanings and differences:

// 1.  undefined:
//    Definition: A variable is declared but has not been assigned a value.

//  Common Causes:

//  A variable is declared but not initialized.
//  A function does not explicitly return a value.
//  Trying to access an object property that doesn’t exist.
//  Functions that don’t have a return statement automatically return undefined


//  Key Points:

//  undefined is a built-in value that JavaScript uses when a variable exists but doesn’t have a value yet.
//  Declared but uninitialized variables are always undefined.



// 2. not defined:
//  Definition: A variable is not declared at all in the current scope.

//  Common Causes:
 
//   Trying to access a variable that has never been declared anywhere in the current scope.
//   Error Type: When a variable is not defined, JavaScript throws a ReferenceError


//   Key Points:

//  not defined means that the variable does not exist in the current execution context.
//  This is different from undefined, where the variable exists but hasn’t been assigned a value.


// 3.  NaN (Not-a-Number):
//    Definition: A special value representing "Not-a-Number". It typically occurs when a mathematical operation fails to produce a valid number.

//  Common Causes:

//  Performing an invalid mathematical operation (e.g., dividing a string by a number).
//  Trying to convert a non-numeric string into a number.
//  An arithmetic operation results in something that is not a number (e.g., 0 / 0)

//  Key Points:

//  NaN represents a failed numeric operation, not an absence of value.
//  It typically appears in mathematical contexts when operations do not produce valid numeric results

//   let a;
//   console.log(a);  // Output: undefined

   
// Question no. 7: How many operators do we have in js ?

// ans: JavaScript provides a wide variety of operators that can be used to manipulate values, perform calculations, and control logic. 
// These operators are grouped into several categories based on their functionality.

// 1. Arithmetic Operators: Used to perform basic mathematical operations.
// 2. Assignment Operators: Used to assign values to variables
// 3. Comparison Operators: Used to compare values and return a boolean (true or false)
// 4. Logical Operators: Used to combine or negate boolean expressions.
// 5. Bitwise Operators: Perform bit-level operations on numbers.
// 6. Ternary/Conditional Operator: A shorthand for if-else conditionals.
//     Syntax: condition ? expressionIfTrue : expressionIfFalse
// 7.  Type Operators: Used to check or convert data types
// 8. String Operators: Used to manipulate strings
// 9.  Comma Operator: Allows multiple expressions to be evaluated in a single statement, with only the last expression being returned.
// 10.  Unary Operators: Operators that take only one operand
// 11.  Relational Operators: These operators are used to test the relationship between two operands.
// 12.  Optional Chaining (?.) Operator: Safely accesses deeply nested properties without having to check if each reference in the chain is null or undefined.
// 13. Nullish Coalescing (??) Operator: Returns the right-hand operand when the left-hand operand is null or undefined



// Question no.8: explain local scope and block scope ?

// ans: 
// In JavaScript, local scope and block scope refer to the context or region of your code where a variable is accessible. 
// Understanding these scopes is crucial for managing variables effectively and preventing unintended side effects in your code.

// 1. Local Scope (Function Scope):

// Definition: A variable declared inside a function has local scope and is accessible only within that function.
// Keyword: Variables declared with var, let, or const inside a function are confined to that function's local scope.
// Access: You cannot access local variables outside the function they are defined in.

// 2. Block Scope:

// Definition: A variable declared inside a block (e.g., inside curly braces {}) using let or const has block scope, meaning it is only accessible within that specific block.
// Keyword: Variables declared with let or const are block-scoped, while var is function-scoped.
// Blocks: A block can be created by using {} in structures like if, for, while, and even standalone code blocks.


// Summary:

// Local Scope (Function Scope):

// Variables declared inside a function (var, let, or const) are local to that function and cannot be accessed outside of it.
// var within a function has function scope, meaning it’s hoisted to the top of the function, regardless of blocks.

// Block Scope:

// Variables declared inside a block (let, const) are block-scoped, meaning they are only accessible inside the block they are defined in.
// let and const follow block scope rules, making them safer to use within loops and conditionals, avoiding unintended access to variables outside of blocks.



// Question no. 9: Functional scope and scope chain in javascript ?

// ans: In JavaScript, functional scope and the scope chain are fundamental concepts that define how and where variables are accessible. 
// They are central to understanding how JavaScript manages variable visibility and access throughout different parts of your code.

// 1. . Functional Scope:

// Definition: Functional scope, also known as function scope, means that variables declared within a function are local to that function and cannot be accessed outside of it. Only the code inside the function can reference these variables.
// Keywords: Variables declared with var (and also let and const within a function) are confined to that function’s scope.
// Access: Variables declared inside a function are only accessible within that function and not in the global scope or other functions.

// 2. Scope Chain:
// Definition: The scope chain is the mechanism that JavaScript uses to resolve variable names. When a variable is used, JavaScript looks for it in the current scope. If it doesn’t find it, it goes up to the outer scope, and continues until it reaches the global scope.
// The scope chain is created during the execution of functions and nested functions, allowing JavaScript to "chain" the scope from the innermost to the outermost (global) scope.


// Summary:
// Functional Scope (or Function Scope): Variables declared within a function are accessible only within that function. 
// JavaScript respects this boundary, keeping function variables isolated from the outer (global) scope.

// Scope Chain: When a variable is used inside a function, JavaScript first looks for it in the current scope. 
// If it's not found, it moves up to the outer scope, continuing this process until it reaches the global scope.