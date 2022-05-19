/*
Number
String
Boolean
Null
Undefined
*/
//Booleans - True/False
alexIsSexy = true;
alexIsLame = false;

console.log(alexIsLame, alexIsSexy);

//Variables are dynamically typed

//Strings - characters wrapped in quotes ''  ""  `` - Backticks are for multiline comments
//typeof - will tell what type is
console.log(typeof 1);
console.log(typeof 'Hi Bitch');
console.log(typeof true);

//length property

console.log('hello'.length);
//Strings are immutable!!!

//String methods
console.log('hello');
let msg = 'Hello World!';

console.log(msg.toUpperCase());
console.log(msg.toLowerCase());

//Trim method! Removes trailing and leading whitespace
message = 'Hi baby     ';
console.log(message);
console.log(message.trim());

//More string methods :) These take arguments!
greeting = 'Hi there baby!';
console.log(greeting.indexOf('baby!')); //ONLY FINDS FIRST OCCURRENCE!

//slicing!
console.log(greeting.slice(9));
console.log(greeting.slice(9, 11)); //Not inclusive. Will not show index 11, only indices 9 and 10

//replace!
console.log(greeting.replace('baby', 'Batman'));

//String Escapes
//          \n \' \" \\

//string template literals - Use Backtick characters
console.log(`I counted ${3 + 4} sheep.`);

//Null and Undefined   ***Technically there are Symbol and BigInt also***
//null and undefined are NOT the same
//Null is INTENTIONAl abscense of value that needs to be assigned by user. EXPLICIT NOTHINGNESS

//Undefined is a variable that does not have a value assigned to it
//Usually undefined is a value we get back from javascript. We really won't be setting a variable to it
