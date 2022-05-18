//Var, Const, Let   - NaN and infinity   -  Unary operators

//Numbers and NaN

//NaN is a numeric value that represents something that is not a number
console.log(0 / 0);
console.log(1 + NaN);

//Infinity!
console.log(1 / 0);
console.log(-1 / 0);

//0 and -0 exist
console.log(0 - 0);

// 4.5
// 16
// NaN

//Variables!    - Use camelCase in javascript!
// let someName = value;
// Let is keyword. Once declared, cannot be declared again!

//Unary operators
let score = 10;
score += 1; //also score++
score *= 2;
score /= 1;
score -= 5;
score **= 2;

console.log(score);
score++;
console.log(score);

//Const - stands for constant. Can't change value after declaring! Arrays & Objects we'll use const more often than we think over let
const hens = 4;
//hens = 20;

//var is old way of making variables. These days make most sense to use const or let. UNLESS you're using old code base or outdated browser
