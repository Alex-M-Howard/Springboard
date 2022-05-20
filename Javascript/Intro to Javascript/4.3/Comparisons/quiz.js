/*
Boolean Logic Exercises
Part I
Write down what the following statements will return. Try to figure this out before putting the commands in the chrome console.
*/

// 2 == “2”;       -> True
// 2 === 2;        -> True
// 10 % 3;         -> 1
// 10 % 3 === 1;   -> True
// true && false;  -> False
// false || true;  -> False
// true || false;  -> True

/*Part II
Answer the following questions about this code block:
*/

let isLearning = true;

if (isLearning) {
	console.log('Keep it up!');
}
else {
	console.log('Pretty sure you are learning....');
}

/*
What should the above code console.log?        -> "Keep it up!"
Why do we not need to specify if(isLearning === true)? Why does if(isLearning) work on its own?    -> isLearning is truthy because of the assignment statement. This allows the omission of  if(isLearning === true)
*/

let firstVariable;
let secondVariable = '';
let thirdVariable = 1;
let secretMessage = 'Shh!';

if (firstVariable) {
	console.log('first');
}
else if (firstVariable || secondVariable) {
	console.log('second');
}
else if (firstVariable || thirdVariable) {
	console.log('third');
}
else {
	console.log('fourth');
}

/*
What should the above code console.log ? Why ?   ->  This will console.log "third" because firstVariable is undefined (false), 
firstVariable || secondVariable is also false because secondVariable is "", another falsey value. firstVariable || thirdVariable will see the OR statment and the right side is true because
1 is truthy.

What is the value of firstVariable when it is initialized? -> firstVariable will be undefined since it is not being assigned a value

Is the value of firstVariable a “truthy” value? Why?       -> Because firstVariable is undefined, it is automatically a falsey value         
Is the value of secondVariable a “truthy” value? Why?      -> Because secondVariable is an empty string, it is automatically a falsey value
Is the value of thirdVariable a “truthy” value? Why?       -> Because thirdVariable is not 0 or -0, any other number is a truthy value  
*/

/*Part III
Research Math.random [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
Write an if statement that console.log’s “Over 0.5” if Math.random returns a number greater than 0.5.
Otherwise console.log “Under 0.5”.*/

Math.random() > 0.5 ? console.log('Over 0.5') : console.log('Under 0.5');

/*What is a falsey value ? List all the falsey values in JavaScript.
* false
* 0
* ""
* null
* undefined
* NaN

A falsey value is a value (Or lack of a value) that evaluates to false in JavaScript.
*/
