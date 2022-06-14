/*
//////// Variables ///////
const and let have 'block' Scope
var has function scope(can be accessed before code is run)



//////// String Methods /////////
charAt()	Returns the character at a specified index (position)
charCodeAt()	Returns the Unicode of the character at a specified index
concat()	Returns two or more joined strings
endsWith()	Returns if a string ends with a specified value
fromCharCode()	Returns Unicode values as characters
includes()	Returns if a string contains a specified value
indexOf()	Returns the index (position) of the first occurrence of a value in a string
lastIndexOf()	Returns the index (position) of the last occurrence of a value in a string
localeCompare()	Compares two strings in the current locale
match()	Searches a string for a value, or a regular expression, and returns the matches
repeat()	Returns a new string with a number of copies of a string
replace()	Searches a string for a value, or a regular expression, and returns a string where the values are replaced
search()	Searches a string for a value, or regular expression, and returns the index (position) of the match
slice()	Extracts a part of a string and returns a new string
split()	Splits a string into an array of substrings
startsWith()	Checks whether a string begins with specified characters
substr()	Extracts a number of characters from a string, from a start index (position)
substring()	Extracts characters from a string, between two specified indices (positions)
toLocaleLowerCase()	Returns a string converted to lowercase letters, using the host's locale
toLocaleUpperCase()	Returns a string converted to uppercase letters, using the host's locale
toLowerCase()	Returns a string converted to lowercase letters
toString()	Returns a string or a string object as a string
toUpperCase()	Returns a string converted to uppercase letters
trim()	Returns a string with removed whitespaces
valueOf()	Returns the primitive value of a string or a string object


///////// String Properties /////////
constructor	Returns the string's constructor function
length	Returns the length of a string
prototype	Allows you to add properties and methods to an object
String HTML Wrapper Methods
HTML wrapper methods return a string wrapped inside an HTML tag.


////////// Loops ////////
for (let i = 0; i < 10; i++){
    DO Something here!
}

colors = ['red', 'blue', 'green']
for (color of colors) {
    console.log(color)   --> red, then blue, then green
}

for (color in colors) {
    console.log(color)   --> returns index 0, 1, 2 of a list. OR an object's keys!!!
}


do{
    i++;
}
while (i < 5); --> Do while loop will run AT LEAST ONCE!

while (i < 10){   --> While loop will check condition before running
    i++
}







//////// Number methods ///////////
isFinite()	Checks whether a value is a finite number
isInteger()	Checks whether a value is an integer
isNaN()	Checks whether a value is Number.NaN
isSafeInteger()	Checks whether a value is a safe integer
toExponential(x)	Converts a number into an exponential notation
toFixed(x)	Formats a number with x numbers of digits after the decimal point
toLocaleString()	Converts a number into a string, based on the locale settings
toPrecision(x)	Formats a number to x length
toString()	Converts a number to a string
valueOf()	Returns the primitive value of a number






///////// FALSY VALUES ////////
0
false
NaN
null
""
undefined







//////////// MATH METHODS //////////////
abs(x)	Returns the absolute value of x
acos(x)	Returns the arccosine of x, in radians
acosh(x)	Returns the hyperbolic arccosine of x
asin(x)	Returns the arcsine of x, in radians
asinh(x)	Returns the hyperbolic arcsine of x
atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y, x)	Returns the arctangent of the quotient of its arguments
atanh(x)	Returns the hyperbolic arctangent of x
cbrt(x)	Returns the cubic root of x
ceil(x)	Returns x, rounded upwards to the nearest integer
clz32(x)	Returns the number of leading zeros in a 32-bit binary representation of x
cos(x)	Returns the cosine of x (x is in radians)
cosh(x)	Returns the hyperbolic cosine of x
exp(x)	Returns the value of Ex
expm1(x)	Returns the value of Ex minus 1
floor(x)	Returns x, rounded downwards to the nearest integer
fround(x)	Returns the nearest (32-bit single precision) float representation of a number
log(x)	Returns the natural logarithmof x
log10(x)	Returns the base-10 logarithm of x
log1p(x)	Returns the natural logarithm of 1 + x
log2(x)	Returns the base-2 logarithm of x
max(x, y, z, ..., n)	Returns the number with the highest value
min(x, y, z, ..., n)	Returns the number with the lowest value
pow(x, y)	Returns the value of x to the power of y
random()	Returns a random number between 0 and 1
round(x)	Rounds x to the nearest integer
sign(x)	Returns the sign of a number (checks whether it is positive, negative or zero)
sin(x)	Returns the sine of x (x is in radians)
sinh(x)	Returns the hyperbolic sine of x
sqrt(x)	Returns the square root of x
tan(x)	Returns the tangent of an angle
tanh(x)	Returns the hyperbolic tangent of a number
trunc(x)	Returns the integer part of a number (x)



//////// AND, OR, NOT /////////
&&	logical and
||	logical or
!	logical not







/////////// DATE METHODS ///////////
getDate()	Returns the day of the month (from 1-31)
getDay()	Returns the day of the week (from 0-6)
getFullYear()	Returns the year
getHours()	Returns the hour (from 0-23)
getMilliseconds()	Returns the milliseconds (from 0-999)
getMinutes()	Returns the minutes (from 0-59)
getMonth()	Returns the month (from 0-11)
getSeconds()	Returns the seconds (from 0-59)
getTime()	Returns the number of milliseconds since midnight Jan 1 1970, and a specified date
getTimezoneOffset()	Returns the time difference between UTC time and local time, in minutes
getUTCDate()	Returns the day of the month, according to universal time (from 1-31)
getUTCDay()	Returns the day of the week, according to universal time (from 0-6)
getUTCFullYear()	Returns the year, according to universal time
getUTCHours()	Returns the hour, according to universal time (from 0-23)
getUTCMilliseconds()	Returns the milliseconds, according to universal time (from 0-999)
getUTCMinutes()	Returns the minutes, according to universal time (from 0-59)
getUTCMonth()	Returns the month, according to universal time (from 0-11)
getUTCSeconds()	Returns the seconds, according to universal time (from 0-59)
getYear()	Deprecated. Use the getFullYear() method instead
now()	Returns the number of milliseconds since midnight Jan 1, 1970
parse()	Parses a date string and returns the number of milliseconds since January 1, 1970
setDate()	Sets the day of the month of a date object
setFullYear()	Sets the year of a date object
setHours()	Sets the hour of a date object
setMilliseconds()	Sets the milliseconds of a date object
setMinutes()	Set the minutes of a date object
setMonth()	Sets the month of a date object
setSeconds()	Sets the seconds of a date object
setTime()	Sets a date to a specified number of milliseconds after/before January 1, 1970
setUTCDate()	Sets the day of the month of a date object, according to universal time
setUTCFullYear()	Sets the year of a date object, according to universal time
setUTCHours()	Sets the hour of a date object, according to universal time
setUTCMilliseconds()	Sets the milliseconds of a date object, according to universal time
setUTCMinutes()	Set the minutes of a date object, according to universal time
setUTCMonth()	Sets the month of a date object, according to universal time
setUTCSeconds()	Set the seconds of a date object, according to universal time
setYear()	Deprecated. Use the setFullYear() method instead
toDateString()	Converts the date portion of a Date object into a readable string
toGMTString()	Deprecated. Use the toUTCString() method instead
toISOString()	Returns the date as a string, using the ISO standard
toJSON()	Returns the date as a string, formatted as a JSON date
toLocaleDateString()	Returns the date portion of a Date object as a string, using locale conventions
toLocaleTimeString()	Returns the time portion of a Date object as a string, using locale conventions
toLocaleString()	Converts a Date object to a string, using locale conventions
toString()	Converts a Date object to a string
toTimeString()	Converts the time portion of a Date object to a string
toUTCString()	Converts a Date object to a string, according to universal time
UTC()	Returns the number of milliseconds in a date since midnight of January 1, 1970, according to UTC time
valueOf()	Returns the primitive value of a Date object







///////////// ARRAY METHODS ///////////
concat()	Joins two or more arrays, and returns a copy of the joined arrays
copyWithin()	Copies array elements within the array, to and from specified positions
entries()	Returns a key/value pair Array Iteration Object
every()	Checks if every element in an array pass a test
fill()	Fill the elements in an array with a static value
filter()	Creates a new array with every element in an array that pass a test
find()	Returns the value of the first element in an array that pass a test
findIndex()	Returns the index of the first element in an array that pass a test
forEach()	Calls a function for each array element
from()	Creates an array from an object
includes()	Check if an array contains the specified element
indexOf()	Search the array for an element and returns its position
isArray()	Checks whether an object is an array
join()	Joins all elements of an array into a string
keys()	Returns a Array Iteration Object, containing the keys of the original array
lastIndexOf()	Search the array for an element, starting at the end, and returns its position
map()	Creates a new array with the result of calling a function for each array element
pop()	Removes the last element of an array, and returns that element
push()	Adds new elements to the end of an array, and returns the new length
reduce()	Reduce the values of an array to a single value (going left-to-right)
reduceRight()	Reduce the values of an array to a single value (going right-to-left)
reverse()	Reverses the order of the elements in an array
shift()	Removes the first element of an array, and returns that element
slice()	Selects a part of an array, and returns the new array
some()	Checks if any of the elements in an array pass a test
sort()	Sorts the elements of an array
splice()	Adds/Removes elements from an array
toString()	Converts an array to a string, and returns the result
unshift()	Adds new elements to the beginning of an array, and returns the new length
valueOf()	Returns the primitive value of an array


///////// SWITCH STATEMENT ///////////
//SWITCH - Not as commonly used. But its awesome. It is like Case statements in Siemens
let day = 3;


switch (day) { // Once a case matches, it will return the rest of the cases! So need for RETURN!!!
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







//////////// OBEJCTS ////////////
Object keys in JavaScript are (almost) strings, symbols can also be keys …but we won’t talk about Symbols yet

Values In Objects
Values can be variables!

const movieTitle = "Titanic";
const releaseYear = 1997;
const dudeWhoDirectedIt = "James Cameron";

const movie = {
  title: movieTitle,
  year: releaseYear,
  director: dudeWhoDirectedIt
};
Accessing Values In An Object
To access a value in an object, you need to know the value’s key

Given the key, you can obtain the value either with dot notation or bracket notation

const language = {
  name: "JavaScript",
  hasObjects: true,
  yearReleased: 1995,
  isSuperFun: true
};

language.name; // "JavaScript"
language.hasObjects; // true
language["name"]; // "JavaScript"
Dot Vs. Bracket - What???
When using bracket notation, the key is evaluated as an expression

When using dot notation, the key is NOT evaluated as an expression

If you don’t know with 100% certainty what the name of the key is that you are looking for, use bracket notation.

Otherwise always use dot notation.

Updating Values In An Object
Like with arrays, values in an object can be updated with a simple assignment.

const obj = {
  key: "old value"
};

obj.key = "new value"
obj["key"] = "newer value"
Removing Keys From An Object
To remove a key-value pair from an object, you can use the delete keyword.

const obj = {
  key: "old value"
};

delete obj.key; // true
You can use this to remove values from an array as well, though this is less common.

Storing Values From An Object
Storing values by accessing them

const language = {
  name: "JavaScript",
  hasObjects: true,
  yearReleased: 1995,
  isSuperFun: true
};
const name = language.name; // dot notation works
const hasObjects = language["hasObjects"]; // brackets work too!
const yearReleased = language.yearReleased;
hasOwnProperty
Called on an object
Accepts the name of a key
Returns true if the key exists in the object, otherwise false
const cat = {
  name: "Blue",
  hairColor: "gray",
  eyeColor: "orange"
}

cat.hasOwnProperty("name"); // true
cat.hasOwnProperty("favoriteFood"); // false



//////// DOM /////////
DOM is Document Object Model - programming interface for HTML

Things we can do with document object:
*finding elements
*make new elements
*updating elements
*change properties on elements
*listening for events


use console.dir(document) and you'll be able to explore like a json

Selecting an element:
*getElementById
*getElementsByTagName
*getElementsByClassName
*querySelector(All) - accepts a valid CSS selector as a string

document.querySelector("#main");  - this gets elements with id of main
document.querySelector("h2.section-heading"); - gets even more specific
querySelectorAll will return all matches, the others only the first!

fancier. An hr that is direct descendant of body
document.querySelectorAll('body > hr')

We can use these in variable and serach in them!
let form = document.querySelector('form');
form.querySelector('btn'); -> will search just the form section for a buttoN!


innerText = GRAB text from an element
TextContent = Similar concept as innerText, but ignores previous stylings!

innerText is aware of what is showing on screen, textContent will show everything
even if you have it hidden by css

innerHTML will return all elements inside the object.
const paragraph = document.querySelector('p');
console.log(paragraph.innerHTML);

Modifying styling
paragraph.style.backgroundColor = 'red'; //Remember camelcase!


//modifying multiple stylings at once!
//const allPs = document.querySelectorAll - Would return a nodelist
//We must loop!
const allPs = document.querySelectorAll('p');
for (let paras of allPs) {
	paras.style.backgroundColor = 'blue';
	paras.style.fontSize = '1.25rem';
}

const images = document.querySelectorAll('img');
for (let all of images) {
	//Biggest thing to remember is that it changes have to be a string!
	all.style.width = '100px';
}



/////////// HTML ATTRIBUTES ///////////
*src
*href
*class
*id
*type
*value

getAttribute
const imgs = document.querySelectorAll('img');

for (img of imgs) { 
    console.log(img.getAttribute('src'));
}
/You can set attributes too
const input = document.querySelector('input')
input.setAttribute('type', 'checkbox');


let source = imgs[0].getAttribute('src')
for (img of imgs) {
    img.setAttribute('src', source);


//We can change classes too
quote[0].setAttribute('class', 'section-title')


//direct attribute access
//use dot notation and grab directly

const form = document.querySelector('#muffin-form');
form.id = 'Now-what'
console.log(form.id);

//Value is most common you'll use
const input2 = document.querySelector('form input')
input.setAttribute('type', 'input');
input2.value = '5'


/////// ADDING NEW ELEMENTS TO HTML /////////
// Make a new empty LI
const newTodo = document.createElement('li');
// Make a new empty B element
const boldText = document.createElement('b');
//Add some text to the new B element:
boldText.textContent = "DON'T FORGET TO LOCK THE COOP!"
//Add a class to
newTodo.classList.add('todo');
//Add the B element as a child of the LI
newTodo.append(boldText);

//Create a second LI
const secondTodo = document.createElement('li');
secondTodo.textContent = "Order more la croix";
secondTodo.className = 'todo';

// Select the UL we want to append to
const ul = document.querySelector('ul');
//Append both new LIs at once!
ul.append(newTodo, secondTodo);

//Prepending a new LI to the UL
const thirdTodo = document.createElement('li');
thirdTodo.textContent = "Feed Cats";
ul.prepend(thirdTodo);

// Making a new image
const newImg = document.createElement('img');
newImg.classList.add('thumbnail') //adding a class (to resize the img)
// Setting the img src
newImg.setAttribute('src', 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1320&q=80')

document.body.prepend(newImg)



//////// REMOVING ELEMENTS FROM HTML /////////

OLD WAY -> remove CHILD by calling the parent, pass in child
const removeMe = document.querySelector('#remove-me');
ul.removeChild(removeMe) -> the unordered list is the parent


NEW WAY -> remove()
const removeMe = document.querySelector('#remove-me');
removeMe.remove()




////// PARENT CHILD SIBLINGS ///////
Accessing a parent element: parentElement methods
const div = document.querySelector('div')
div.parentElement

Accessing CHILDREN CHILD ELEMENT 
div.children ->array like object
div.firstElementChild
div.lastElementChild

ACCESSING SIBLINGS
nextElementSibling - > If there isn't one, it will return null
previousElementSibling


///////// NODES vs ELEMENTS ////////
NODES are everything in the DOM, including comments
Every element is a node, but not all nodes are elements!
.childNodes will show all underlying inside of an element

*/