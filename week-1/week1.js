// Question 1
let a = 2;
let b = 3;
let c = 2;
(a == b) // False
(a == c) // True

// Question 2
typeof "John Doe" // String
typeof 3.14 // Number
typeof true // Boolean
typeof 234567890123456789012345678901234567890n // Big Int
typeof undefined // Undefined
typeof null // Null 
typeof Symbol('symbol') // Symbol

// Question 3
let x = 2;
let y = "2";
(x == y) // True
(x === y) // False

// Question 4
let x = 3;
let y = "3";
x + y // 33

// Question 5
let x = 24;
let y = "Hello";
x + y // 24Hello

// Question 6
let name = "Vivek";
let surname = " Bisht";
name + surname // Vivek Bisht

// Question 7
let x = 3;
let y = "3";
x - y // 0

// Question 8
let x = 0;
let y = 23;

if(x) { console.log(x) } // Empty because 0 means false

if(y) { console.log(y) } // 23

// Question 9
console.log(isNaN("Hello"))// True
console.log(isNaN(345)) // False
console.log(isNaN('1')) // True False
console.log(isNaN(true)) // False
console.log(isNaN(false)) // False
console.log(isNaN(undefined)) // True

