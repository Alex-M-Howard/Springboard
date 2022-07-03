//ES5 - Global Constants
var PI = 3.14;
PI = 42; // stop me from doing this!


//ES2015 Global Constants
// Write an ES2015 version
const PI = 3.14;  //Now variable won't be able to be overwritten

//Quiz
//What is the difference between var and let?
// Using var will allow you to use it outside of a code block, whereas let will only work in a code block.
// Using var, you can also re-declare a variable with same name without error


//What is the difference between var and const?
// Same differences as var and let, where const has block scope. 
// Using const, variable cannot change. var PI = 3.14 like in the example above, you can change
// const PI = 3.14 will always be 3.14 without exception. 

//What is the difference between let and const?
//Let and const both have block scope, but let will allow a variable to have its value changed. Using
//Const, you will be unable to assign it a new value. 

//What is hoisting?
// When using the var variable declaration, the code when compiled will declare the variable
// at the top of the run. So you could reference a variable before it is declared in the code and
// you will see it return as undefined. Using let or const, you will get a ReferenceError if referencing a variable
// that has yet to be declared.
