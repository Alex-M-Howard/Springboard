// // Comparison Operators

// === strict equality   - Checks for equality of value and type
// == equality           - Checks for equality of value NOT type
// !== strict inequality
// != not equality

// Use === and !==

// Truthy and Falsy
// Expressions in parantheses of condiiontal statment will resolve to TRUE or false
// Values that are not EXPLICITLY true or false are still evaluated Truthy or Falsy

// Six Falsy Values:
// -false
// -null
// -undefined
// -0
// -"
// -NaN
// Everything else will evaluate to true

// Determine if something is truthy or falsy by wrapping it in Boolean constructor
// Boolean("hi");            //-> true
// Boolean(" ");             //-> false
// Boolean(favoriteNumber);  //-> false
// Boolean(null);            //-> false
// Boolean(l);               //-> true
// Boolean(undefined);       //-> false
// Boolean('cat');           //-> true
// Boolean(-0);              //-> false
// Boolean(-1);              //-> true

// Use '!' bang operator for boolean values. first ! turns the value to the opposite, the other will flip it back and return a true false
// !!'hi' -> true
// !!'0'  -> false

// ! NOT -- ||  OR  --  &&   AND
// !!'hi' -> true
// !'hi'  -> false
console.log('hi' || 0); //since value on the left is truthy, that value is returned in console!
console.log('hi' && 0); //returns 0 since the && is looking to see if both are truthy

//Using && or || it is possible that the right side of the expression won't run.
// false expression &&  anything (anything won't run)
// true expression || anything (anything won't run)

// NOT (!) has higher precedence than AND (&&) which is higher than OR (||)
// ! > && > ||      - Can be altered with parentheses

//Ternary operator. Advanced use of conditional statmnts. shorthand for if/else. Can only have TWO braches, does not work with else if
//ternary is named after fact theere are three operands. An expression followed by two statements
//(expression to check) ? statement if true : statement if false
let answer = 20;

let guess = 15;
guess > answer ? console.log('Too High') : console.log('Too Low');

let wasCorrect = guess === 15 ? "You're Correct" : 'Incorrect';
console.log(wasCorrect);

//SWITCH - Not as commonly used. But its awesome. It is like Case statements in Siemens
let day = 3;

//if elseif else if else if elseif else...whew...Terrible.

switch (day) { // Once a case matches, it will return the rest of the cases
	case 1:
		console.log('Monday');
		break;
	case 2:
		console.log('Tuesday');
		break;
	case 3:
		console.log('Wednesday');
		break;
	case 4:
		console.log('Thursday');
		break;
	case 5:
		console.log('Friday');
		break;
	case 6:
		console.log('Saturday');
		break;
	case 7:
		console.log('Sunday');
		break;
	default:
		console.log('I Have no idea!');
}

//Check out switch statements for similar output!

let emoji = 'sad face';

switch (emoji) {
	case 'sad face':
	case 'happy face':
		console.log('yellow');
		break;
	case 'eggplant':
		console.log('purple');
		break;
	case 'heart':
		console.log('red');
		break;
}
