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



///////// TIMERS /////////
//First Class Functions
/*
Most programming lanugages do not terat functions the same as other data types
Functions are considered first - class, like any other data type
Functions are objects, which is why they can be passed as an argument or in a variable

They are first-class because:
-Can be passed as arguments to other functions
-return value of a function can be another function
-can be assigned to a variable
*/


//Threading in JavaScript
/*
JavaScript is a single threaded language!

A thread is essentially a process that runs.
Multi-threads, means multiple processes at once


//Threading
greet()
// alert("I am alert!")
diss()

//These run one after the other. The alert stops anythign else
//Diss can't run at same time as the alert 

//We have options to prevent threads from being blocked


Use a timer?
greet()
wait5seconds(); - how can we run some code behind the scenes
diss();

setTimeout(function to call, delay) - wait ms to call some code

redoign the above:
greet();
setTimeout(diss, 3000)  - this will run diss after 3 seconds, but then sends the delay elsewhere. will run other code until timer is up
greet()

This will print:
I love you,
I love you,
You suck





greet();
setTimeout(diss, 3000);  //These are two SEPARATE sets
setTimeout(diss, 1000);  //Will execute one after the 1 second mark, other after 3. NOT 4 seconds total :)
greet();



setInterval(function, time ) - executes constantly

You can check the interval ID, and call ClearInterval to stop it

const id = setInterval(greet, 2000);
clearInterval(id);


loupe - latentflip.com
Shows the call stack and how it passes the timer function off
*/

/*
Anonymous Function
A nameless function

function() {
    diss();
    diss();
    diss();
}

pass it in to setTimeout


greet()
setTimeout(function(){
    diss();
    diss();
    diss();
}, 1000);
greet();

Temporary funciton that you can just run once in setTimeout
You can also store in variable


const printOne = function () {
    console.log(1);
}









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


/////////// JAVASCRIPT EVENTS /////////////


What is an event?
DOM events are “actions” that occur as a result of something the user or the browser does.

We can use JavaScript to execute code when these kinds of “events” happen.

What Kinds Of Events Do We Have?
clicking on something
hovering over something with the mouse
pressing certain keys
when the DOM has loaded
when a form is submitted
This Is Really What Most Browser Based JS Is About!
We write code that listens for events - and react accordingly!

This is commonly called Event Driven Programming

What kinds of web pages have you used recently that have JavaScript that listens for events?

So How Do We Do It?
We have three options!

Attach the name of the function to the element in HTML
Attach the name of the function to an element in JavaScript
Use the addEventListener method
Attaching The Name Of The Function
<h1 onclick="runClickHandler()"> Hello World </h1>
In HTML
function runClickHandler(){
  console.log("You just clicked the h1 element!";
})
Adding In Javascript
const h1 = document.querySelector("h1");

h1.onclick = function(){
  console.log("You just clicked the h1 element!";
}
Using addEventListener
const h1 = document.querySelector("h1");

h1.addEventListener("click", function(){
  console.log("You just clicked the h1 element!";
})
Which One Should We Use?
We’re going to go with addEventListener - here’s why:

It gives us the most flexibility around our event listeners
It avoids writing any inline code in our HTML and keeps our HTML and JS seperate
This is commonly called “Separation of Concerns”
A Gotcha - Waiting For The Dom To Load
If you are trying to access properties in the DOM, before the web page has loaded - it won’t work! This becomes an issue if you put <script> tags in the <head> before the DOM has loaded

Thankfully we have an event we can listen for to handle this! It’s called DOMContentLoaded

document.addEventListener("DOMContentLoaded", function(){
  // place your code inside here
})
Accessing The Event Object
Inside of the callback to addEventListener, we get access to a special object as a parameter - the event object

const h1 = document.querySelector("h1");

// we can call this parameter whatever we want - event is very common
h1.addEventListener("click", function(event){
  console.log(event) // let's take a look!
})
What Is Inside Of The Event Object?
target - what element is the target of the event
pageX / pageY - where on the page did this event occur?
key - what key was pressed that triggered this event?
preventDefault() - a function used to prevent the default behavior of the event.
This is very useful for stopping form submissions from refreshing the page which is their default behavior
Let’s see this in action
<form>
  Name: <input id="firstName" type="text">
  <button>Add your name!</button>
</form>
const formElement = document.querySelector("form");

formElement.addEventListener("submit", function(event){
  console.log("you just submitted the form!")
})
Unfortunately this will not work! The default behavior of a form is to trigger a refreshing of the page.

Solving our problem
If we want to stop the default behavior of an event, we need to use the special event.preventDefault() method.

const formElement = document.querySelector("form");

formElement.addEventListener("submit", function(event){
  event.preventDefault();
  console.log("you just submitted the form!");
})
Another example
So far we’ve seen click and submit, events - let’s take a look at another one, keyPress!

demo/keypress-demo/index.html
<!DOCTYPE html>
<html>
<body>
  <h1>Press the "a" key!</h1>
  <script src="script.js"></script>
</body>
</html>
demo/keypress-demo/script.js
// listen for the keypress everywhere
document.addEventListener("keypress", function(event) {
  if (event.key === "a") {
    alert("you just pressed the 'a' key!");
  }
});
Adding Multiple Event Listeners
It’s very common that you will want to add multiple event listeners on elements

Let’s see an example:

  <body>
    <h1>See your friend list!</h1>
    <ul id="friend-list">
      <li>Michelle <button>Remove</button></li>
      <li>Juan <button>Remove</button></li>
      <li>Emma <button>Remove</button></li>
    </ul>
    <script src="script-list.js"></script>
  </body>
const buttons = document.querySelectorAll("button");

for (let button of buttons) {
  button.addEventListener("click", function(event) {
    event.target.parentElement.remove();
  });
}
Everything seems to be working!

What happens when we want to add new elements?
  <body>
    <h1>See your friend list!</h1>
    <ul id="friend-list"></ul>
    <form>
      <label for="first-name"></label>
      <input type="text" id="first-name" />
      <button>Add a friend!</button>
    </form>
    <script src="script-form.js"></script>
  </body>
const form = document.querySelector("form");
const friendList = document.querySelector("#friend-list");

const buttons = document.querySelectorAll("li button");

for (let button of buttons) {
  button.addEventListener("click", function(event) {
    event.target.parentElement.remove();
  });
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const newFriendInput = document.querySelector("#first-name");
  const newLi = document.createElement("li");
  const newButton = document.createElement("button");
  newLi.innerText = newFriendInput.value;
  newButton.innerText = "Remove";

  newLi.append(newButton);
  friendList.append(newLi);
  form.reset();
});
It doesn’t work!
The issue here is that our event listener only works for elements currently on the page

There are two ways we can fix this

Adding the event listener when we create elements
Event Delegation
Let’s start with adding an event listener when we create

Adding the listener when we create
const form = document.querySelector("form");
const friendList = document.querySelector("#friend-list");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const newFriendInput = document.querySelector("#first-name");
  const newLi = document.createElement("li");
  const newButton = document.createElement("button");
  newLi.innerText = newFriendInput.value;
  newButton.innerText = "Remove";

  newButton.addEventListener("click", function(event) {
    event.target.parentElement.remove();
  });

  newLi.append(newButton);
  friendList.append(newLi);
  form.reset();
});
This will work, but it’s not the most efficient approach

We’re adding an event listener for every single button inside of each <li>

This means if we had 1,000,000 friends, we’d have 1,000,000 listeners!

We can fix this using event delegation

Event delegation
The idea behind event delegation is that we make a parent element the “delegate”

In our case, the parent element is the <ul> element

We attach a single event listener on the parent or delegate element and then if the event happens inside a certain child element, we can access that child element using event.target

How to do better using event delegation
friendList.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
  }
}); 
Exact same behavior with only one event listener!

Event Bubbling And Capturing
The process of an event moving from the place it is clicked to its target is called capturing

When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

This is called bubbling.

Removing Event Listeners
Sometimes after you add an event listener, you will want to remove it.

Some examples of this include:

A game is over and no more events should be registered
You can no longer drag and drop something into a part of the page
You do not want the user submitting any more information
How it works
We can use the removeEventListener function to remove any event listeners

This can not be called on multiple elements

let buttons = document.getElementsByTagName("button");

buttons.removeEventListener("click", function(){
  alert("You just clicked a button");
});
The code above will not work!

Maybe we can just add it to an element individually like this:

for(let button of buttons){
  button.removeEventListener("click", function(){
    alert('You just clicked on a button!');
  });
}
But this won’t work either!

Removing Event Listeners Correctly
removeEventListener needs a reference to the name of the function to remove

function alertData(){
  alert("You just clicked a button");
}

for(let button of buttons){
  button.removeEventListener("click", alertData);
}
annonymous functions will not work here!

Data attributes
When creating elements and HTML pages, it’s very common that you might want to add some metadata or additional information about elements

These are not things that the user should see, but accessible information in CSS and JavaScript

Instead of placing this in an id or class, we can create custom attributes called data attributes

These attributes start with data- and then anything you would like. You can read them easily in CSS and JavaScript

An example
demo/data-attributes/index.html
<!DOCTYPE html>
<html lang="en">
<body>
  <ul id="cars">
    <li data-model="model 3" data-year="2014">Tesla</li>
    <li data-model="crv" data-year="2017">Honda</li>
    <li data-model="focus" data-year="2011">Ford</li>
    <li data-model="prius" data-year="2015">Toyota</li>
  </ul>
  <script src="script.js"></script>
</body>
</html>
demo/data-attributes/script.js
const ul = document.querySelector("ul");

ul.addEventListener("click", function(event) {
  const selectedElement = event.target;
  console.log("see all data attributes", selectedElement.dataset);
  console.log(
    "see one data attribute",
    selectedElement.getAttribute("data-model")
  );
});
Recap
We can add event listeners using addEventListener and remove them using removeEventListener
Using the event object, we can gather useful information about the target, tagName and much more
To add element metadata, we can use data attributes and read them using getAttribute or dataset




/////////// LOCAL STORAGE ////////////

Goals
Utilize localStorage to save information in the browser
Compare and contrast localStorage and sessionStorage
Add and remove primitives to/from localStorage
Add and remove objects to/from localStorage
localStorage
What is localStorage?
localStorage is a mechanism for storing information in the browser for a specific domain

The API is quite easy to use and very minimal - so let’s get started with it!

localStorage vs sessionStorage
When you read more about localStorage you will also hear about something called sessionStorage

data stored in localStorage has no expiration time
data stored in sessionStorage gets cleared when the browsing session ends
modifying localStorage
The most important thing to remember is that all of your keys in localStorage or sessionStorage must be strings.

localStorage stores everything as strings, so it’s just good to get in the habit of setting your keys as strings to avoid confusion.

setting an item in localStorage
We do this using the setItem method

localStorage.setItem("firstName", "Colt");
localStorage.setItem("favoriteNumber", 33);
localStorage.setItem("hasChickens", true);
retrieving an item in localStorage
To retrieve we use the getItem method (only passing in the key)

localStorage.getItem("firstName"); // "Colt"
You can alternatively just access items on the localStorage object:

localStorage.firstName // "Colt"
If you refresh the page - you should be able to still retrieve these keys in localStorage!

Clearing localStorage
To delete a key we use the removeItem function

localStorage.removeItem("firstName");
To clear everything from localStorage we use the clear function

localStorage.clear();
Adding Objects to localStorage
So far we have only added primitives, which is nice and easy, but what happens when we start adding objects?

Well, things get a bit trickier…. Let’s see what happens:

const friends = ["Lana", "Hayden", "Jessie"];

localStorage.setItem("friends", friends);
localStorage.getItem("friends");
When we get the friends key from localStorage, we don’t have an array anymore - we have a string!

Remember, when dealing with localStorage, everything gets converted into a string

In order to get back our original data type, we need to convert this array to a special string format called JSON

JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate

We will be discussing it quite a bit more later on

Working with JSON in the browser
JavaScript has a built-in JSON object, and on this object are two methods used to convert JavaScript data into JSON, and to parse JSON strings into JavaScript

JSON.stringify - is used to convert JavaScript to JSON (or stringify)
JSON.parse parses a string as JSON
Using these two methods allows us to preserve the intended data structure when it is something other than a string:

const friends = ["Lana", "Hayden", "Jessie"];

// the JSON.stringify function
// converts the friends array into a JSON string

localStorage.setItem("friends", JSON.stringify(friends));

// JSON.parse converts the JSON string
// back into JavaScript (in this case, a valid array)

JSON.parse(localStorage.getItem("friends"));
Recap
localStorage is useful for storing information in the browser
to store objects, use JSON.stringify when setting and JSON.parse when retrieving
if you just want to store information for the time a tab is open, use sessionStorage



///////// TERMINAL //////////
What is Terminal?
Terminal is an application that gives us a command line interface (or CLI) to interact with the computer.

Everything you can do in Finder you can do in Terminal, but it’s faster!

What is a shell? Bash/ZSH
You will also hear the term “shell” when learning about Terminal so it is important to distinguish between these terms.

shell
The shell is the program which actually processes commands and returns output.

Most shells also manage foreground and background processes, command history and command line editing.

These features (and many more) are standard in bash, the most common shell in modern linux systems.

terminal
A terminal refers to a wrapper program which runs a shell.

Decades ago, this was a physical device consisting of little more than a monitor and keyboard.

As unix/linux systems added better multiprocessing and windowing systems, this terminal concept was abstracted into software.

Installing Terminal
If you’re on a Mac or Linux, you’re good to go! Simply launch the Terminal application

If you’re using a Windows machine we reccomend using Git Bash.

https://gitforwindows.org/ (the easiest way to get up and running with Git and Terminal)
There are other options for installing a Terminal on Windows, however the most user-friendly option for this course is Git Bash. If you choose to use another option like WSL, that is totally fine! However, we will be able to offer the highest level of support to Windows users running Git Bash.

Paths and Folders
In Terminal, all files and folders begin at the root directory.

The root directory is noted by a /.

Inside the root directory are essential files/folders that your machine needs, but we do not modify the files and folders in the root directory often.

The users folder
Inside of the root directory, we have a folder called Users which contains all of the user accounts on your computer.

If you move into the directory for your user account, you will be in the home directory, which is denoted by ~.

For example, if your user name on the computer is colt, then your home directory would be /Users/colt.

A synonym for the /Users/colt path is ~ when you are logged in as colt.

Moving Around
The first thing you want to start to understand when using Terminal is how to navigate from folder to folder.

Where am I?
Before you start moving around, it’s helpful to know where you are.

Thankfully, there is a handy command called pwd which will display the absolute path and let you know what current directory you are working in.

So if you are ever unsure, just type in pwd (which is short for print working directory).

Moving around
One of the most common commands you will be using in Terminal is cd which is short for “change directory.”

In order to change a directory, type cd followed by the directory or a path to the directory.

If we want to move up a directory we use cd .. and if we want to move into a directory we specify the name of the directory we are moving into.

For example, if you are in your home directory and type cd Desktop, you should move into your Desktop directory.

We just mentioned that you can type cd followed by a directory or path. But what is a path?

Absolute Paths vs Relative Paths
A path is simply the way to reach a file or folder; it’s like an address for the file or folder you’re trying to reach.

When we specify a path starting from the root directory /, we call that an absolute path.

If you’re currently in the ~ home directory and you want to change directories into the Desktop folder, here are two following ways:

cd Desktop - relative to where I am currently
cd /Users/colt/Desktop - absolute, starting from the root (first /, then Users, then colt, then Desktop)
Moving around the terminal efficiently
One of the hardest parts about getting used to the Terminal is the handling an interface where you can not easily use a mouse!

This means we will have lots of typing to do and quite a few shortcuts to learn!

If you hold down the alt/option key you can click on a line in the terminal to move your cursor there, but it is still much easier to get comfortable with keyboard shortcuts

Useful keyboard shortcuts
Command/Control + a (move to beginning of line)
Command/Control + e (move to end of line)
Command/Control + w (delete the word where your cursor is)
Command/Control + u (delete an entire line)
Option/Alt + left/right (jump between words)
Listing Files
One of the most important commands you are going to be using is ls, which lists the contents of a directory.

Typing ls in your home directory will show you all of the files and folders inside of that directory.

Sometimes the default ls command does not give us all the information we want. In such cases, we’ll need to add some flags to get more details.

Flags
Flags can change and even enhance commands and are added using a - after the command.
Flags are usually represented by single uppercase and lowercase letters.
With the ls command, we can pass in the -a flag to list “all” files (including hidden files and folders).
If we want the ls command to give us more information about each file, we can pass in the -l flag.
To combine flags we can just use one - and pass in each flag. So the command to use ls and show all files and more detailed information about each one would be ls -la.
Using flags for ls will be essential when working with permissions as well as when you start working with git.

Using the manual to learn more
If you ever want to learn more about a terminal command you can use the man command followed by the terminal command to see a manual on the command!

Let’s try it with ls

Files and Folders
Creating Files And Folders
To create a folder we use the mkdir command (short for “make directory”), followed by the name (or space-separated names) of the folder(s) that we would like to create.

mkdir first_folder
Now that we made the first_folder, how do we change directories into it?

We use the cd command!

Now that we are inside our new folder, first_folder, let’s create a new file. A simple way to create a file is with the touch command.

touch first_file
Displaying Contents Of A File
You can display the contents of a file using the cat command.

If you type cat NAME_OF_FILE you can see the contents of the file easily, right there in Terminal.

Let’s add some text to a file so that we can use cat.

echo "Hello World" > first_file
The echo command simply writes text to the terminal.

The > is called a redirect. The > redirects the output from the command on the left side into the file on the right hand side.

We will see more on redirection later on!

Opening up a file
If you would like to open up a file, you can use the open command.

So if we want to see the contents of first_file we can do open first_file.

The open command is also very useful if you want to open all the files and folders in a directory.

Moving Files And Folders
To move files and folders we use the mv command. Let’s try this out!

mv test.txt ../
Renaming files and folders
mv test.txt newfile.txt
Copying Files and Folders
Sometimes you may want to make a copy of a file or a folder. To copy a file, we use the cp command (short for copy).

cp PATH_TO_ORIGINAL_FILE PATH_TO_COPIED_FILE
For example, if we wanted to create a copy of test.txt and call it test_copy.txt, we could enter the following command (assuming we’re inside of first_folder:

cp test.txt test_copy.txt
In order to copy a directory, you need to modify the cp command as follows:

cp -r first_folder first_folder_copy
The -r is called a _flag_; you can think of a flag for a command as an option that can be passed to that command.

To learn more about the flags that you can pass to cp, you can type man cp

Deleting Files And Folders
To remove a file or folder we use the rm command.

rm newfile.txt
If this works, you should not see any output from the Terminal. You can always run ls make sure the file is not there

Where did it go?
Now that it is gone… where did it go? The Trash? The answer is it is completely removed from your computer.

There is no undo so be VERY careful when using the rm command.

Removing a folder
It turns out that rm is for a file, while the command rmdir is used to remove (empty) directories.

If there is anything inside the folder, you will have to use rm -rf.

Like we saw with cp, the r and f in -rf are examples of flags.
  
  
  
Shell is program which actually processes commands and returns output.
Bash is one example. Comes preinstalled. Zshell is another. 



Top most directory is root directory. noted by an    /
/users/home
to access home ~ 


ls - list of directory
pwd - print working directory
cd - change directory

flags have a dash and a letter. Modifies the command
ls -a  -> lists all in directory. Even hidden files
ls -l (el) -> prints outlists details. Date, size, user created file
You can combine also ls -a -l or ls -al

man command - manual
man ls -> gives you manual page for ls. USE Q TO EXIT MANUAL
  

mkdir -> make directory
touch -> create file. also updates file time if it already exists
cat -> prints data inside file to terminal
echo -> prints back text you type. If you use a 'redirect', takes output from echo and wriets
it to a file. will create new file if the redirect is to non-existant file

echo "hello World" > first_file
The > will overwrite the file contents
In git, there is a gitignore file. sometimes we put a ".env" in it and that's it. Well that is 
a great usecase for echo.


rm -> remove file/s   The file is completely removed from the computer, not put in trash
rmdir -> remove directory
rm -rf -> deletes an entire (doesn't have to be empty) directory

You can also open a file or directory
open

open . will open current folder. Open .. will open previous directory

mv -> move files and folders
we can also use mv to rename something
you can rename and move at same time:
touch rename_me.html
mv rename_me.html ../index.html

cp -> copy a file or folder
cp PATH_TO_ORIGINAL_FILE PATH_TO_COPIED_FILE

to copy a directory
cp -r

control(win) + a -> moves cursor to beginning of line
control(win) + e -> moves cursor to end of line

control(win) + w -> deletes word to where your cursor is
control(win) + u -> deletes entire line up to cursor

option(win) + left -> jumps between words to the left
option(win) + right -> jumps between words to the right






///////// GIT //////////
What is Git?
If you google “what is git” you will probably see the definition for “an unpleasant or contemptible person.” Thankfully, Git is much better than that. According to [the Git documentation](https://git-scm.com/):

“Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.”

In plain English, Git is a tool that allows developers to track versions of their code over time.

It does this by creating “snapshots” of the current state of the code base whenever you tell it to.

Put simply, Git is essential when collaborating with other developers to ensure that previous “snapshots” of the code can be revisited if necessary.

This is helpful when revisiting breaking changes or undoing changes.

When you’re learning about tools like Git, you’ll often see the acronym VCS. This stands for Version Control System

Git is a VCS because it lets you create different versions of your code and easily swap back and forth between different versions.

While Git is a hugely popular VCS, it’s not the only one. Subversion is another example.

Installing Git
Before we can get started with anything Git related, we need to make sure you have Git installed.

In your terminal, type in git --version; if you do not see an error, you are good to go.

If you are seeing any errors, you may need to install Git on your computer.

If you’re on Linux, try running sudo apt-get install git or

If you’re on Windows - https://git-scm.com/download

Getting started with Git
Once you have Git installed, you need to “initialize” a repository with Git before you can start using it

run the command git init inside of a folder to do this!

This creates a .git folder which is what allows you to start using git in that folder

Initializing a repository in the wrong place
If you accidentally initialize a repository in the wrong directory, you can just remove the .git folder using rm -rf .git.

You don’t want to make your Desktop or Home folder a git repository!

Local workflow
Three areas
Working Directory
Staging Area (added, but not committed)
Repository (added and committed)
Git status
In order to see where our files are in the local workflow we run the command git status
Untracked files will be in red text
Tracked but uncommited files will be in green text
After commiting our working directory will be clean and no longer show the commited files
Working Directory
The working directory holds files that we are working on but have not yet saved to git
As files are edited, git sees that they have been modified but their changes are not recorded
Lets imagine we just created a new repository
If we run the command git status, it would look something like this
_images/untracked_files.jpg
All files that have been modified are shown in red text
These files are untracked until we move them to the staging area with the command git add
Git add
Git add is used to save our modified files so that they will be included in the next commit
This allows us to choose what modified changes we want to save and which changes we want to ignore
The command git add followed by the name of the file moves that file to the staging area
To move all modified files to the staging area at once we use git add .
This is what git status would look like after adding ‘app.js’ and ‘index.html’

_images/tracked_files.jpg
‘main.css’ will not be included in the next commit unless it is moved to staging

Staging Area
If we move a modified file to the staging area, we are preparing to commit the state of the file at that point
If we continue working on that file we have to add again or the new changes won’t be tracked
The staging area is where we save the state of the work we are preparing to include with the next commit
Files that are staged are shown in green text
Git commit
Once we are satisfied with the work of a file in our staging area we commit it to the local repository
We need include a commit message that sumarizes the changes that were made in that commit
The message is connected to the commit with the -m flag
git commit -m “summary of this commit”
A commit is still local until we push it to a remote repository (more on this later)
After making the commit will see a message similar to this

_images/committed_files.jpg
Committing Workflow
git status - What files have been added / modified?
git diff - Among those files, what has been changed?
git add <NAME_OF_FILE> - Add NAME_OF_FILE to staging area
git commit -m - Commit the file with a message!
Optional: git log - See a log of all your commits
.gitconfig Settings
If you take a look at git log you may not see any information for the author and email.

Here’s how you change it:

git config --global user.name "YOUR NAME"
git config --global user.email "YOUR EMAIL"
If you also find it annoying to press q every time in git log, you can change this as well

git config --global --replace-all core.pager cat
These global configuration settings live in a file called .gitconfig which typically lives in your home directory. Try running cat ~/.gitconfig to see all of your settings!


use git status to check if you have already initailized a repo. 
Nested gits mess up. So check first.
git init -> initialize repository

rm -rf .git -> will delete a git repository

git add -> moves to staging area
git commit -m "summary of this commit"

git add . will stage ALL files with untracked changes
git diff -> shows what was modified


////// GIT BRANCHING MERGING /////////
Branching
So far in our Git workflow we’ve only been working on a single branch.

But when you’re working with a team, this isn’t usually desirable.

What if you want to go off on your own and work on some experimental new feature?

You want to be able to work without worrying about breaking the current code or conflicting with other coders

Typically everyone does not code on a single branch
A branch holds a collection of commits related to a specific purpose (bug fixes, new features, deployment)
A code base typically has multiple branches being worked on at once
Once the purpose of the branch is complete we merge the commits of the branch to the main codebase
After making your initial commit in a new git repo, a branch named main is generated automatically
To see your branches, type git branch in the terminal.
At this point, you should only see main, we will see how to create a branch next
‘An Important Note’: GitHub used to call the default ‘main’ branch of a repository the ‘master’ branch. As of late 2020, GitHub has decided to rename the default branch from ‘master’ to ‘main’. All new repositories have a ‘main’ branch, but many older repositories will still call this branch ‘master’. If you are using an existing GitHub account, or are using an older version of Git, your ‘main’ branch might be called ‘master’. We are using the ‘main’ branch in this set of instructions to keep up with the latest industry trends. If you have an older version of git or older repositories, simply swap out ‘main’ with ‘master’ when you are entering these commands into your terminal.
‘Read More About Naming Conventions’: If you are curious about GitHub’s decision to rename the default branch to ‘main’, read their documentation here - https://github.com/github/renaming
Creating a branch
To create a new branch we use the git checkout command with the -b flag and then pass in a name of a branch.

git checkout -b NAME_OF_BRANCH
This creates the branch and moves you to the newly created branch

Also note that where you create a new branch matters

All code on the branch you were on when you created the new branch will automatically be included in the new branch code

Moving between branches
To move back to main (or to any other branch) we use the command git checkout NAME_OF_BRANCH
If we have unsaved work on a branch we will get an error message
The easiest way to get around this is to finish and commit the work on this branch
We will explore different approaches later such as
How to git reset our code without saving
How to git stash the current state of our code and later retrieve it using git stash pop
Deleting a branch
Typically we will delete a branch after
The branch has been merged to the primary codebase
We decide we don’t want to merge the code
In order to delete a branch we have to be currenlty be on a different branch

Then we can run the command git branch -d NAME_OF_BRANCH

We may run into error message when trying to delete if we try to delete a branch that has unsaved work
This is git’s way of warning us “are you sure you want to delete this branch, you didn’t commit your work”
To force the delete use a capital D flag in our command git branch -D NAME_OF_BRANCH
To see all of the branches we have locally, we use the command git branch.
Sometimes we also want to see the branches others are working on remotley
To list all branches on GitHub or remote branch we pass the -a flag
The flag does not matter right now, but it’s good to get in the habit of using git branch -a.
Merging
With a branch workflow, we usually create a new branch for something we are working on (a new feature, a redesign, etc.).
Traditionally, the main branch is reserved for production code and immediate bug fixes.
When we are done modifying our branch, we need to merge the code into the main branch.
Here’s what we’re going to do:

Create a folder called learn_branching and cd into it => mkdir learn_branching && cd learn_branching.
Initialize a git repository => git init.
Create a file called first.txt => touch first.txt.
Add that file git add ..
Commit that file git commit -m “initial commit”.
Create a new branch called feature => git checkout -b feature.
Now that you are on the feature branch, create a file called new.txt => touch new.txt.

Add that file => git add ..
Commit that file => git commit -m “adding new.txt”.
Create another file called another.txt => touch another.txt.
Add that file => git add ..
Commit that file => git commit -m “adding another.txt”.
Now lets move back to the main branch using git checkout main
Note that the main branch has no awareness of new.txt or another.txt!
Merge our changes from the feature branch into the main branch => git merge feature
Delete our branch called feature => git branch -d feature
Now if you take a look at git log --oneline --decorate you’ll see that the commit history on feature has ben merged into main!


git branch "nameOfBranch" -No quotes -> creates new branch
git checkout "nameOfBranch" -> changes to another branch

to create branch in one line -> git checkout -b "nameOfBranch"

delete a branch after code has been merged, or decide you don't want to merge
git branch -d "nameOfBranch"

merging branches. 
git merge "nameOfBranch" -> wherever you run it from, it iwll merge to that branch!

merge conflicts
fast forward merge will put all changes chronologically into new branch
recursive merge has different times on each branch. Two developers working on same file for example.







//////// GITHUB //////////
What is GitHub?
GitHub is a web-based Git repository hosting service.

Simply put, it is a tool that enables collaboration by hosting shared Git repositories that teams of developers can all contribute to.

While GitHub uses Git, the functionality it provides is VERY different from Git so make sure you understand that Git and GitHub are not the same thing.

In short, Git is a Version Control System. GitHub is an online platform for hosting and sharing code, text files and even more complex file formats.

Why use GitHub?
It provides a great way for you to store your code in a remote location

It’s a fantastic way to collaborate with other developers both privately and publicly

Many large open source projects are hosted on GitHub, which makes it very easy to examine the code both on GitHub and locally

In the next couple of chapters, we will learn how to move code from our local repository to a remote repository on GitHub using the push command

Who uses GitHub?
Here are some projects you may have heard of that are hosted there:

React - https://github.com/facebook/react
Node.js - https://github.com/nodejs/node
Angular - https://github.com/angular/angular
Ruby on Rails - https://github.com/rails/rails
Twitter Bootstrap - https://github.com/twbs/bootstrap
jQuery - https://github.com/jquery/jquery
Homebrew - https://github.com/Homebrew/brew
Getting started with GitHub
If you don’t have an account with GitHub yet, head to https://github.com/ and create an account

Be sure to use whatever email address is in your .gitconfig for your email address when you sign up with GitHub.

If you’d rather sign up with a different email address, change your .gitconfig accordingly.

You’ll run into some minor annoyances if there’s a mismatch between the email address in your GitHub profile and the email address in your .gitconfig.

Creating Remote Repositories on GitHub
Navigate to https://www.github.com/new
After naming and creating a new repository click create repository
Follow the second block of instructions for pushing an existing repository from the command line
What are we doing here?
Adding a remote
Calling it “origin”
What’s a remote?
It’s a nickname for a URL where your repository lives!
Instead of typing/remembering the entire URL, we give it a nickname
By default this nickname is ‘origin’
git remote add NAME_OF_REMOTE URL_FOR_REPOSITORY
NAME_OF_REMOTE: origin
URL_FOR_REPOSITORY: https://github.com/YOUR_USERNAME/YOUR_REPO.git
git remote add
This command tells our local repository about a remote repository located somewhere.

The location of our remote repository is https://github.com/YOUR_USERNAME/YOUR_REPO.git.

git push origin
Now if we want to send our code to GitHub we could type in

git push https://github.com/YOUR_USERNAME/YOUR_REPO.git master

but typing that whole URL is quite a pain.

Instead, we give the URL a nickname (also called an alias) - “origin”

Once the alias is set up we can simply type
git push origin master
This will send the code from our master branch to this remote repository.
To see where your remotes are pointing to locally, type git remote -v.
This will display both the alias and the remote url
If you need to remove a remote you can use git remote rm NAME_OF_REMOTE

Pushing Your Code
The command we use is git push NAME_OF_REMOTE NAME_OF_BRANCH

Setting the upstream
git push -u origin master
Now we can send our code from a local repository to our remote repository (which we aliased to origin in the previous command).

The -u flag allows us in the future to only have to type git push instead of git push origin master.

Pushing code up to GitHub
Now when you type in git push, you will be prompted to enter your username and password for GitHub. While that is fine once or twice, it becomes quite a nuisance if you are pushing or pulling (retrieving code) frequently.

It would be nice if we could establish some trust between our computer and GitHub so that when we run git push or git pull, GitHub does not need to authenticate us. To do that we are going to create an SSH key.



Git pull - bring updated code from repo




Practice
Generate some code files on your machine and set up a local repository using git init .
Create a remote repository on github to push your code to
Use ‘git remote add’ to point the local repo to the remote repo and set up an alias (origin)
Add and commit your code to generate a master branch
Push your code to the remote repo using ‘git push origin master’
Go back to github and refresh the page, you should be able to see your code
Change some code and add and commit a second time
This time set the upstream branch
You should now be able to push your code with ‘git push’ in the future
More Practice
Create another remote repo on github
Point the existing local repo to the new remote repo and set up an alias
We have shown how to view, add and remove the remote
Research git remote set-url if you are curious how update the remote with one line of code
Push your code to the second remote repo
Examine both the repos on Github that you have pushed code to
Notice the new repo has all of the commit history
The commit history belongs to the local git repo
The remote github repo just provides a interface for people to share code



///////// JASMINE //////////
Testing


To include inside of your files:
INCLUDE CSS FOR JASMINE:
<link rel="stylesheet" href="https://unpkg.com/jasmine-core@4.1.0/lib/jasmine-core/jasmine.css" />

INCLUDE JS for JASMINE:
<script 
  src="https://unpkg.com/jasmine-core@4.1.0/lib/jasmine-core/jasmine.js"></script>
<script 
  src="https://unpkg.com/jasmine-core@4.1.0/lib/jasmine-core/jasmine-html.js"></script>
<script 
  src="https://unpkg.com/jasmine-core@4.1.0/lib/jasmine-core/boot0.js"></script>
<script 
  src="https://unpkg.com/jasmine-core@4.1.0/lib/jasmine-core/boot1.js"></script>
*include these at end of body before your code

INCLUDE OUR JS and TEST FILE
<script src="file.js"></script>
<script src="file.test.js"></script>



describe -> Group different its together
it -> test spec

describe('CalculateTaxes Tests', function (){
  its here
})


it('should reject invalid incomes', function () {
  expect(() => calculateTaxes('aksljdlkas')).toThrowError();
  expect(() => calculateTaxes([])).toThrowError();
})

Matchers
.toEqual(obj)
Has the same value (eg, different lists with same values match)
.toBe(obj)
Is the same object (eg, different lists with same items don’t)
.toContain(obj)
Does object/array contain this item?
.not.
Add before matcher to invert (eg expect(...).not.toEqual(7))
https://jasmine.github.io/api/edge/matchers.html

What To Test
Test every function in at least one way
Think about “edges”
What if the list were empty?
What about non-integer numbers?
What if the file can’t be found?
Is the first case/last case handled differently?



Jasmine Hooks
beforeEach(() => {
  code that runs before every it
})

beforeAll(() => {
  Before all its run, this runs
})

afterAll(() => {
  After all its run, this runs
})


Testing best practices
Unit Testing vs Integration Testing

Unit test
  -unit tests are narrow in scope
  -verify a module of code is doing what it is intended to do
  *simple and cheap
  *works well with pure functions that do not have side effects
  
Integration test
  -broader in scope
  -verify multiple modules of code are working together properly
  *more complex and costly to maintain


pure functions do not have side effects on external variables and are easily tested with a unit test
- do not have side effects on external variables

Test every function in at least one way
Thing about edge cases
  what if list were empty?, non-integer numbers? file can't be found?

*Write code that is easier to test. More functions & smaller functions: easier to debug and test
  -Don't mix logic and UI in a function
  





  //////////// Advanced Array Functions /////////////

  ****forEach****

let colors = ['red', 'blue', 'green'];

colors.forEach(function (value, index, array) {
	console.log(`Value: ${value}, Index: ${index}, Array: ${array}`);
})
* Will always return undefined!
When You Would Use forEach
You want to iterate over an array, but the return value of your callback is not important
Almost all of the time there are better options…

YOU DO NOT NEED to always call the array or index in forEach

function holler() {
    console.log('HEY YOU');
}

const whisper = function () {
    console.log('psssst');
}

function add(x, y) { return x + y };
function subtract(x, y) { return x - y };
function multiply(x, y) { return x * y };
function divide(x, y) { return x / y };

const mathFuncs = [add, subtract, multiply, divide];

function doMath(a, b, mathFunc) {
    return mathFunc(a, b);
}


function doAllMath(x, y, mathFuncs) {
    mathFuncs.forEach(function (value, index, array) {
        console.log(value(x, y));
    });
};

doAllMath(5, 2, mathFuncs);



****map****


map
Creates a new array
Iterates through an array
Runs a callback function for each value in the array
Adds the result of that callback function to the new array
Returns the new array
map always returns a new array of the same length



When You Would Use Map
You want to “transform” an array into another array of the same length
You do not want to overwrite an existing array and instead return a new copy



let numbers = [1, 2, 3];

let newNumbers = numbers.map(function (value) {
    return (value * 10)
});

console.log(newNumbers);


**** Filter ****

filter
Creates a new array
Loops through an array
Runs a callback function on each value in the array
If the callback function returns true, that value is pushed to the new array
If the callback function returns false, that value will not be included in the new array
the result of the callback will always be evaluated into a boolean


When You Would Use Filter
You want to “transform” an array into another array of the same length or smaller length depending on a condition
You want to see how many elements in an array satisfy a certain condition
You do not want to modify the existing array you are filtering

let words = ['apple', 'banana', 'orange', 'cherry', 'cry'];

let newWords = words.filter(function (word) {
    if (word.length < 6) {
        return word;
    }
});

console.log(newWords)



**** some/every ****
iterates through array
if at least one value returns true in the callback, returns true
Else -> returns false

let numbers = [1,2,3];

numbers.some(function(value, index, array){
  return value < 3;
});

// true

let numbers = [1,2,3];

numbers.some(function(value, index, array){
  return value > 10;
});

// false


function hasAdmin(arr){
  return arr.some(function(value){
    return value.admin
  });
}

hasAdmin([
  {name: "Colt", admin: true},
  {name: "Poppy", admin: false}
]); // true

hasAdmin([{name: "Colt"}, {name: "Poppy", admin: false}]); // false
function hasQuestionMark(str){
  return str.split('').some(function(value){
    return value === '?';
  });
}

hasQuestionMark('How are you feeling'); // false
hasQuestionMark('How are you feeling now?'); // true

When You Would Use Some
You need to determine if at least one value in an array exists and you have to determine this by using a callback (not includes/indexOf)
A simple alternative to using filter and seeing if the array contains at least one element


Every - > iterates an array. if any value returns false, entire function returns false
let numbers = [1,2,3];

numbers.every(function(value, index, array){
  return value > 0;
});

// true
let numbers = [1,2,3];

numbers.every(function(value, index, array){
  return value > 2;
});

// false


function allVowels(str){
  return str.split('').every(function(value){
    return "aeiou".includes(value)
  });
}

allVowels('awesome') // false
allVowels('aiaieoeoiu') // true
function allIntegers(arr){
  return arr.every(Number.isInteger);
}

allIntegers([1,2,3,4,4,4,4]) // true
allIntegers([5,1,4,3,2.2]) // false


**** find/findIndex ****
Find
Iterates through an array
Runs a callback on each value in the array
If the callback returns true at any point, return the value in the array that we’re iterating over
Otherwise, return undefined
An Example
let arr = [1,2,3];

arr.find(function(value, index, array){
  return value === 2;
});

// 2
let arr = [1,2,3];

arr.find(function(value, index, array){
  return value < 1;
});

// undefined

Using Find In A Function
function findOddNumber(arr){
  return arr.find(function(value){
    return value % 2 !== 0
  });
}

findOddNumber([2,3,4,5]) // 3
findOddNumber([4,6,8,10]) // undefined
function ensureNoSubArrays(arr){
  return arr.find(Array.isArray) === undefined
}

ensureNoSubArrays([1, 2, [3,4]]); // false
ensureNoSubArrays([1,2,3,4]); // true


When You Would Use Find
You need to determine if a value in an array exists and you have to determine this by using a callback
A simple alternative to using filter and accessing the first element of the filtered array




findIndex
Iterates through an array
Runs a callback on each value in the array
If the callback returns true for any single value, return the index at which that value is found
Otherwise, return -1
An Example
let arr = [1,2,3];

arr.findIndex(function(value, index, array){
  return value < 2;
}); // 0

let arr = [1,2,3];

arr.findIndex(function(value, index, array){
  return value > 3;
}); // -1
How Does It Work?
Iterates through an array
Runs a callback on each value in the array
If the callback returns true for any single value, return the index at which that value is found
Otherwise, return -1
function findIndex(array, callback){
  for(let i = 0; i < array.length; i++){
    if(callback(array[i], i, array) === true){
      return i;
    }
  }
  return -1;
}
Using Findindex In A Function
function findPositionOfBoolean(list){
  return list.findIndex(function(value, index, array){
    return typeof value === "boolean"
  });
}

findPositionOfBoolean([1,3,false,true]) // 2
findPositionOfBoolean(["no booleans", "around", "these parts"]) // -1
When You Would Use Findindex
You need to determine the index of a value in an array if it exists and you have to determine this by using a callback
A better version of indexOf to be used when a callback is necessary



**** reduce ****

Whatever is returned from the callback function, becomes the new value of the accumulator!

Accepts a callback function and an optional second parameter
Iterates through an array
Runs a callback on each value in the array
The first parameter to the callback is either the first value in the array or the optional second parameter
The first parameter to the callback is often called “accumulator”
The returned value from the callback becomes the new value of accumulator
Let’s Break It Down

let evens = [2,4,6,8,10];

evens.reduce(function(accumulator, nextValue){
  return accumulator + nextValue;
});


  2
  6
  12
  20
  30


Adding A Second Parameter

let evens = [2,4,6,8,10];

evens.reduce(function(accumulator, nextValue){
  return accumulator + nextValue;
},10);


  12
  16
  22
  30
  40


Let’s Try Something Else

let names = ['Maya', 'Tammy', 'Angela', 'Alexis'];

names.reduce(function(accumulator, nextValue){
  if(nextValue !== "Colt"){
    return accumulator += ' ' + nextValue;
  }
  return accumulator;
},'My friends are');


  Here is what reduce will build up:

  'My friends are Maya'
  'My friends are Maya Tammy'
  'My friends are Maya Tammy Angela'

  With a final output of:

  'My friends are Maya Tammy Angela Alexis'


When You Would Use Reduce

It works for almost everything, but is sometimes overkill
When you want to transform an array into another data structure


EXAMPLE
function vowelCount(str){
    const vowels = "aeiou";
    return str.split('').reduce(function(acc,next){        //str.split turns into array of characters
        let lowerCased = next.toLowerCase()              
        if(vowels.indexOf(lowerCased) !== -1){             // If an index is found, means vowel exists
            if(acc[lowerCased]){                           // The accumulator is an object!, if the 'key' exists (the vowel)
                acc[lowerCased]++;                         // Key exists, add one to value in object
            } else {
                acc[lowerCased] = 1;                       // Key doesn't exist, so add vowel to object with value 1
            }
        }
        return acc;                                        // return this object each time
    }, {});                                                // Initializer value is an empty object
}












//// ES 2015 ////

Brief History
Brendan Eich created JavaScript
ECMA - Spec and standard for JavaScript
ECMA is standards  internationally for electronics and communication

TC39 - committee that maintains and updates ECMA script standards
  -consists of executives from browser companies
  -proposals and debates to figure out what to add

Now we get yearly updates with smaller releases
New formalized process for how to propose

Stage 0 - Strawman - basic ideas
Stage 1 - Proposal - a champion will advance this addition. Examples.
Stage 2 - Draft - Still too early  to decide. Experimental 
Stage 3 - Candidate stage - unlikiely to have future fixes. have at least one browser inmplementation
Stage 4 - Finished 


reviewing var
var
We use the var keyword to declare variables
When defined in a function, the var keyword scopes a variable to that function
var will hoist to the top of the scope it is defined in
You can redeclare and reassign values with var
var instructor = "Colt"; // accessible everywhere!

function greet(){
  var message = "Hello!"; // scoped to the greet function
}
let
The let keyword creates a block-scoped variable: a variable that only exists inside a code block.

What Is A Code Block?
Essentially any pair of curly braces (outside of object syntax).

{
  // this is a code block

  let x = 5;

  var y = 10;

}

console.log(x);
// ReferenceError: x is not defined

console.log(y);
// 10
Where Are Code Blocks Commonly Used?
You’ll mostly use code blocks in for loops and if statements.

if (x > 10) {
  let happy = true; // happy lives ONLY in this code block
}
// can't use it outside the block
console.log(happy); // ReferenceError: happy is not defined
An Example
for (var i = 1; i < 4; i++) {
  console.log(i);
}

// 1
// 2
// 3

console.log(i);
// 4
for (let i = 1; i < 4; i++) {
  console.log(i);
}

// 1
// 2
// 3

console.log(i); // ReferenceError: i is not defined
More About let
It can be reassigned but not redeclared (unlike var).

let z = 5;
z = 25;
let z = 10;
// SyntaxError: Identifier 'z' has already been declared
const
The const keyword prevents a variable from ever being reassigned or redeclared.

const PI = 3.14;

PI = 15; // TypeError: Assignment to constant variable

const PI = 5;  // SyntaxError
const is also block-scoped, like let.

{
  const x = 10;
}

console.log(x); // ReferenceError: x is not defined
Comparison of Variable Declaration Keywords
Keyword	Can Reassign	Can Redeclare	Can Mutate	Scope Rules
var	yes	yes	yes	function scope
let	yes	no	yes	block scope
const	no	no	yes	block scope
What about var?
There’s really no need to use it
Just be careful of block scoping with let


variable hoisting
  -When code is compiled, the var declarations will run at top of program
  -so if you call on the variable before it is technically defined, it'll just show undefined
  -let and const will not be hoisted


NEVER USE VAR. Unless working on old code base. Use let and const
Try to use const if you can.




//// Arrow Functions ////
Arrow Functions
Arrow functions are shorthand for function expressions
They cannot be named and they only work as function expressions.
They are ideal for shortening callbacks.
[1, 2, 3].forEach(function (n, idx) {
  console.log(n, idx);
});
is the same as

[1, 2, 3].forEach((n, idx) => {
  console.log(n, idx);
});
Another Arrow Function!
[1, 2, 3, 4, 5].filter(function(n, idx) {
  return n % 2 === 0;
});
is the same as

[1, 2, 3, 4, 5].filter((n, idx) => {
  return n % 2 === 0;
});
More Arrow Functions!
Arrow Functions have an implicit return if you leave out the curly braces

square everything 

let nums = [1, 2, 3];

let arrSquared = nums.map(n => n ** 2); // [1, 4, 9]
Gotcha with Arrow Function
You still need a return if it’s not on one line!

const multiply = (a,b) => {
  return a * b;
}
You will sometimes see () around an arrow function - esspecially with modern frameworks!

const multiply = (a,b) => (
  a * b
);
If you want to return an object, make sure it’s wrapped in () or on more than one line!

const makeInstructor = (name) => {name:"Colt"}
makeInstructor() // undefined

const makeInstructor2 = (name) => ({name:"Colt"})
makeInstructor2() // {name: "Colt"}
Arrow Functions & this
Arrow Functions do not have their own this context. If your function uses the keyword this, be wary!

You should not be using arrow functions:

In an object method
When you need your own keyword this
Arrow Functions & this - no no’s
Do not use arrow functions inside objects!

const student = {
  firstName: "Melissa",
  sayHi: () => {
    return "Hello " + this.firstName
  }
}
student.sayHi() // Hello undefined

The keyword this refers to the global object (window / global) not the student object - that’s not good!

Arrow Functions usefullness
Use arrow functions when you don’t want the keyword this that a function normally creates.

Arrow functions are a replacement for the bind function in the example below.

const student = {
  firstName: "Melissa",
  sayHi: function() {
    setTimeout(() => {
      console.log("Hello " + this.firstName)
    }, 1000)
  }
}
student.sayHi() // Hello Melissa

Arrow Functions Summary
Can only be used as shorthand for anonymous function expressions
Must put parentheses around parameters if there are 0 or 2+ parameters
Return statement is implied if you leave out curly braces
They do not make their own this


Babel -> javascript compiler. Use stuff like arrow functions, outputs workable
code that would work in Internet Explorer for example






//// Rest & Spread ////

What we used to do
In JS, every function created using the function keyword has access to a special keyword called arguments
function displayArguments(){
  console.log("The first argument is", arguments[0])
  return `You passed in ${arguments.length} arguments!`
}

displayArguments(1,2)  // "The first argument is 1"
displayArguments()  // "The first argument is undefined"
You cannot use arguments with arrow functions

The problem
Unfortunately, arguments is not an actual array, it is an “array-like-object”
It has a length property and can be accessed at a specific index, but does not have build in array methods like map, filter, etc.
function doubleArgs(){
  return arguments.map(function(arg){
    return arg * 2
  })
}

doubleArgs(1,2)  // Uncaught TypeError: arguments.map is not a function
So what did we do?
We turned the array-like-object into an array, by making a copy of an array and setting the target of the copy to be the arguments array-like-object
function doubleArgs(){
  let arrayFromArguments = [].slice.call(arguments)
  return arrayFromArguments.map(function(arg){
    return arg * 2
  })
}

doubleArgs(1,2)  // [2, 4]
Kind of gross…

Introducing Rest and Spread!
Rest / Spread Operator
They are both the “same” operator and use three dots …
When the three dots are part of a function definition, we call the operator the “rest” operator
The rest operator is the last parameter defined in a function and will evaluate to an array of all additional arguments passed in
Let’s look at that first!
// we can call the value after the ... whatever we want

function displayArguments(...restOfArgs){
  console.log("The first argument is", restOfArgs[0])
  return `You passed in ${restOfArgs.length} arguments!`
}

displayArguments(1,2,3); // "You passed in 3 arguments!"
This looks exactly like what we had before, but instead of an “array-like-object”, we have an array.

We can now use methods like map, filter, etc without having to make a copy of the array-like-object first.

function sumMany(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

sumMany(5, 10);  // 15

sumMany(10, 10, 10, 10, 10, 10, 10, 10, 10);  // 90

sumMany(1);  // 1
...nums collects additional arguments into single nums array.

Collecting Remaining Arguments
You can also specify several named parameters and collect the rest.

function oneOrMoreArguments(first, ...more) {
  console.log(first);

  more.forEach(arg => {
    console.log(arg);
  });
}
Here, first will be first item and more will be array of everything else.

Spread Operator
The ... syntax, in a different context, is called the spread operator.
For example: when calling a function, you can “spread out” array elements:

function takesFour(one, two, three, four) {
  console.log(one);
  console.log(two);
  console.log(three);
  console.log(four);
}

const names = ['Mary', 'Colt', 'Angela', 'Abe'];

takesFour(...names);
// Mary
// Colt
// Angela
// Abe
Spread Operator for copies
You can use the same operator to copy over pieces of an array into a new array. This is a shorter version of using concat or writing your own loops

const nums = [1,2,3]
const newNums = [...nums, 4, 5, 6]
const newNumsFirst = [4, 5, 6, ...nums]
const newNumsInMiddle = [0, ...nums, 4]
Spreading Objects
You can use the same operator to copy over pieces of an object into a new object.

const whiskeyTheDog = {
  name: 'Whiskey',
  species: 'canine',
  cool: true,
};

// make a new dog but override the 'name' key
const gandalfTheDog = { ...whiskeyTheDog, name: 'Gandalf' };

console.log(gandalfTheDog);


////{
////  name: 'Gandalf',
////  species: 'canine',
////  cool: true,
////}


Spreading Objects Warning
This is a newer feature to JavaScript so it may not work in older browsers - specifically Internet Explorer and Microsoft Edge.

Spreading and copies
Using spread will only make a “shallow” copy.
If there are nested objects, they will still contain the same reference
For a deep copy, use libraries like lodash
let odds = [1,3,5]
let evens = [2,4,6]

let collection = [odds, evens]

let copy = [...collection]

console.log(collection[0][0]) // 1

copy[0][0] = "REPLACED!"

console.log(collection[0][0]) // "REPLACED"
Where this is commonly used
For built in methods like Math.max that do not accept an array

Math.max([1,2,3]) // NaN
Math.max(...[1,2,3]) // 3
Spreading objects and arrays is incredibly common in React and Redux and other modern front-end frameworks!




//// Object Enhancements ////

Object Shorthand
ES2015 provides quite a few enhancements for JS objects!

When the keys are the same name as the variable values, (this happens a lot), you don’t have to repeat yourself.

let firstName = "Mary";
let lastName = "Malarky";

// ES5 (Oldschool)
let instructor = {
    firstName: firstName,
    lastName: lastName
}
 
let firstName = "Mary";
let lastName = "Malarky";

// ES6
let instructor = {
    firstName,
    lastName
}
Object Methods
A nice shorthand when a key in an object represents a function.

// ES5
let instructor = {
  sayHello: function () {
    return "Hello!";
  }
}
 
// ES2015 - do NOT use arrow functions here!
let instructor = {
  sayHello() {
    return "Hello!";
  }
}
Computed Property Names
ES2015 allows us to create an object with a key that JavaScript can compute at definition.

Here’s what we mean by that!

// ES5
let firstName = "Mary";
let instructor = {};
instructor[firstName] = "That's me!";

instructor.Mary; // "That's me!"
 
// ES2015
let firstName = "Mary";
let instructor = {
    [firstName]: "That's me!"
}

instructor.Mary; // "That's me!"
Current usage
These new shorthand methods are everywhere!
Object shorthand and methods allow for writing less code
Computed property names are everywhere in modern web frameworks.
Computed property names in the wild
This appears when you work with multiple inputs or DOM elements and you want to change the value in an object based on a specific interaction,
It’s impossible to know upfront what key you are changing in the object without hardcoding the key, so instead we can use the event object for a browser interaction.
function changeValueInObj(obj, event){
  return {
    ...obj,
    [event.target.name]: [event.target.value]
  }
}



//// Destructuring ////

Object Destructuring
JavaScript programmers take things out of objects all the time.

Here’s how you used to have to extract values into variables.

let userData = {
  username: 'smith',
  id: 12345,
  password: 'fiddlesticks',
  firstName: 'Angela',
  lastName: 'Smith',
  age: 'guess',
  isLegit: undefined
};

let username = userData.username;
let firstName = userData.firstName;
let lastName = userData.lastName;
let id = userData.id;
That’s A Lot of Typing
So they came up with some syntactic sugar.

 let userData = {
   username: 'smith',
   id: 12345,
   password: 'fiddlesticks',
   firstName: 'Angela',
   lastName: 'Smith',
   age: 'guess',
   isLegit: undefined
 };


  declare variables: username, firstName, lastName, id
   values taken from the keys of the same name in userData
 
 let { username, firstName, lastName, id } = userData;

 console.log(username);  // smith
 console.log(id);        // 12345
Destructuring + Spread
const userData = {
  username: 'smith',
  id: 12345,
  password: 'fiddlesticks',
  firstName: 'Angela',
  lastName: 'Smith',
  age: 'guess',
  isLegit: undefined
};

// extract the password key; collect the rest in 'user'
const { password, ...user } = userData;

console.log(user);
/*
{
  username: 'smith',
  id: 12345,
  firstName: 'Angela',
  lastName: 'Smith',
  age: 'guess',
  isLegit: undefined
}

Renaming with destructuring
const instructorData = {
  name: "Colt",
  job: "Instructor"
}

const { name: instructorName, job: occupation } = instructorData;

instructorName // "Colt"
occupation // "Instructor"
Defaults with destructuring
const options = {
  refreshTime: 200
}
const { refreshTime = 750, waitTime = 1000 } = options;
console.log(refreshTime); // 200 - initialized in options
console.log(waitTime); // 1000 - fallback to default
Destructuring nested objects
const instructor = {
  id: 44,
  name: 'Colt',
  isHilarious: true,
  funFacts: {
    favoriteFood: 'Burrito',
    favoriteDrink: 'Old Fashioned',
  }
};
const {funFacts: {favoriteFood, favoriteDrink}} = instructor;
console.log(favoriteFood); // 'Burrito'
Destructuring functions
We can use destructuring to extract key/value pairs from an object into variables.

function makeInstructor(settings) {
  let name = settings.name;
  let age = settings.age;
}
We’re going to assume the function is passed an object with a key of name and age

function myFunc({name, age}) {
  let name = name;
  let age = age;
}
But what happens if the object does not contain a key of name or age?

We can use default parameters!

function myFunc({name = "Xie", age=38}) {
  let name = name;
  let age = age;
}
You Can Apply The Same Concept To Arrays!
const myFavoriteThings = ['teaching', 'music',
                          'hiking', 'dank memes'];

const [first, second, ...others] = myFavoriteThings;

console.log(first);   // 'teaching'
console.log(second);  // 'music'
console.log(others);  // ['hiking', 'dank memes']
Fancy 1-Line Array Value Swap
let a = 1;
let b = 3;

[a, b] = [b, a];

console.log(a); // 3
console.log(b); // 1




//// Maps & Sets /////

Data structures in JavaScript
Data structures are formats for efficiently collecting or storing data
So far we’ve seen Arrays and Objects
ES2015 introduces two new ones, Maps and Sets
Maps
Also called “hash maps” in other languages
Until ES2015 - objects were replacements for maps
Similar to objects, except the keys can be ANY data type!
Created using the new keyword
What it looks like
let firstMap = new Map();

firstMap.set(1, 'Ash');
firstMap.set(false, 'a boolean');
firstMap.set('nice', 'a string');
firstMap.delete('nice'); // true
firstMap.size; // 2
Keys can be any type!

let arrayKey = [];
firstMap.set(arrayKey, [1,2,3,4,5]);

let objectKey = {};
firstMap.set(objectKey, {a:1});

firstMap.get(1); // 'Ash'
firstMap.get(false); // 'a boolean'
firstMap.get(arrayKey); // [1,2,3,4,5]
firstMap.get(objectKey); // {a:1}
We can easily iterate over the map!

firstMap.forEach(v => console.log(v));

// Ash
// a boolean
// [1,2,3,4,5]
// {a:1}
Maps also provide:

.keys() to iterate over all the keys
.values() to iterate over all the values
.entries() to iterate over all the [key,value] pairs
a Symbol.iterator which means we can use a for…of loop to iterate over the keys, values or both!
Here’s what it looks like to access everything in a map with .entries() and destructuring!

let m = new Map([
  [1, "Ayisha"],
  [2, "Shani"],
  [3, "Michelle"],
])

for(let [key,value] of m.entries()){
    console.log(key, value);
}

// 1 "Ayisha"
// 2 "Shani"
// 3 "Michelle"
Why use maps?
Finding the size is easy - no more loops or Object.keys()
The keys can be any data type!
You can accidentally overwrite keys on the Object.prototype in an object you make - maps do not have that issue
Iterating over keys and values in a map is quite easy as well
If you need to look up keys dynamically (they are not hard coded strings)
If you need keys that are not strings!
If you are frequently adding and removing key/value pairs
Are key-value pairs frequently added or removed?
If you are operating on multiple keys at a time
Sets
All values in a set are unique
Any type of value can exist in a set
Created using the new keyword
Exist in quite a few other languages, ES2015 finally brings them to JavaScript
Creating Sets
To make a new Set, we call new Set()
When making a new Set, you can also pass in an iterable object.
const hashTags = new Set(["#selfie", "#nofilter"])
Adding to Sets
There is only a single method to add items to a set: add()

const annoyingHashTags = new Set();
annoyingHashTags.add("#YOLO");
annoyingHashTags.add("#Blessed")
annoyingHashTags.add("#YOLO"); // will not be added!
size
Use the size property to determine the number of values stored in a Set:

const annoyingHashTags = new Set();
annoyingHashTags.add("#YOLO");
annoyingHashTags.add("#Blessed")

annoyingHashTags.size //2
Checking for an element in a set
Sets do not support random access,
but we are able to check if a set contains a given value using has()
const annoyingHashTags = new Set();
annoyingHashTags.add("#YOLO");
annoyingHashTags.add("#Blessed");

annoyingHashTags.has("#YOLO"); //true
annoyingHashTags.has("#Selfie"); //false
Removing values in a set
To remove a single value from a set, use delete()

const annoyingHashTags = new Set();
annoyingHashTags.add("#YOLO");
annoyingHashTags.add("#Blessed");

annoyingHashTags.has("#YOLO"); //true
annoyingHashTags.delete("#YOLO");
annoyingHashTags.has("#YOLO"); //false
We can also use clear() to empty a set of all values:

annoyingHashTags.clear();
Iterating over a set
Sets are iterable objects, so we can use them with for…of loops or the spread operator.
Values in a set are ordered by insertion order. Here’s one example of looping over a Set:
const annoyingHashTags = new Set();
annoyingHashTags.add("#Selfie");
annoyingHashTags.add("#Blessed");
annoyingHashTags.add("#NoFilter");

for(let val of annoyingHashTags) {
   console.log("Please don't use", val);
}
When would you use sets?
Removing duplicate values
Uniqueness required
Efficiently checking if an item is in a collection (much better than arrays)


If class contains - CLASSLIST CONTAINS INCLUDES
classList.contains()



JS Objects Review
“Plain Old JavaScript Object” (POJO):

let o1 = {};

let o2 = new Object();   // same thing


o1.name = "Whiskey";

o1["name"] = "Whiskey";  // same thing
Can add functions as keys:

o1.sayHi = function() { return "Hi!" };

o1.sayHi();   // Hi!
Can get arrays of keys, values, or [key, val] arrays:

Object.keys(o1);    // ["name", "sayHi"]

Object.values(o1);  // ["Whiskey", function () {...} ]

Object.entries(o1); // [["name", "Whiskey"],
                    //  ["sayHi", function () { ... } ]
Details You Should Know
Properties that do not exist in the object register as undefined.

o1.elie // undefined
(This causes issues when you attempt to invoke () or . access them)

All keys get “stringified”:

o1[1] = "hello";
o1["1"] = "goodbye";
What is o1[1]?

o1[1];    // "goodbye"
(This gets even more confusing when using things like nested arrays as keys)

Mixing Data And Functionality
Functions and Data
Imagine some useful functions:

demo/triangles.js
/* area of right triangle

function getTriangleArea(a, b) {
  return (a * b) / 2;
}

/* hypotenuse of right triangle 

function getTriangleHypotenuse(a, b) {
  return Math.sqrt(a * a + b * b);
}
getTriangleArea(3, 4)          // 6
getTriangleHypotenuse(3, 4)    // 5
This gets a bit messy, though — all those functions to keep track of!

Using a POJO
demo/triangle-pojo.js
let triangle = {
  a: 3,
  b: 4,
  getArea: function() {
    return (this.a * this.b) / 2;
  },
  getHypotenuse: function() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
};
triangle.getArea()          // 6
triangle.getHypotenuse()    // 5
For now:

let triangle = {
  a: 3,
  b: 4,
  getArea: function() {
    return (this.a + this.b) / 2;
  }
};
this references to “this object”

So, we can helpfully mix data & functionality!

This is tidy: related functionality lives together
Annoying when we want more than one triangle
Classes
Classes are a “blueprint” of functionality:

demo/triangle-oo.js
class Triangle {

  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
}
let myTri = new Triangle();   // "instantiation" of triangle
myTri.a = 3;
myTri.b = 4;
myTri.getArea();        // 6
myTri.getHypotenuse();  // 5
demo/triangle-oo.js
class Triangle {

  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
}
Defines the methods each instance of Triangle will have
Make a new triangle with new Triangle()
Can still add/look at arbitrary keys (“properties”)
this is “the actual triangle in question”
Class names should be UpperCamelCase

Reduces confusion between triangle (an actual, individual triangle) and Triangle (the class of triangles)

A triangle is still an object:

typeof myTri;      // 'object'
But JS knows it’s an “instance of” the Triangle class:

myTri instanceof Triangle;   // true
Constructors
Consider how we made an instance of our Triangle class:

let myTri = new Triangle();   // "instantiation" of triangle
myTri.a = 3;
myTri.b = 4;
demo/triangle-constructor.js
class Triangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
}
The method with the special name constructor is called when you make a new instance.

let myTri2 = new Triangle(3, 4);
myTri2.getArea();    // 6
What Can You Do in the Constructor?
Whatever you want!
Common things:
Validate data
Assign properties
 
constructor(a, b) {
  if (!Number.isFinite(a) || a <= 0)
    throw new Error("Invalid a: " + a);

  if (!Number.isFinite(b) || b <= 0)
    throw new Error("Invalid b: " + b);

  this.a = a;
  this.b = b;
}
(Note you don’t return anything from constructor function).

Methods
getArea() {
  return (this.a * this.b) / 2;
}
Functions placed in a class are “methods” (formally: “instance methods”).

They have access to properties of object with this.

They can take arguments/return data like any other function.

A method can call another method:

class Triangle {
   getArea() {
     return (this.a * this.b) / 2;
   }

   /* Is this a big triangle? 

   isBig() {
     return this.getArea() > 50;
   }
 }
Note: to call a method, you need to call it on this

Without this, calling getArea throws a ReferenceError - it is not in scope!

Inheritance & Super
demo/triangle-duplicate.js
class Triangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(
        this.a ** 2 + this.b ** 2);
  }

  describe() {
    return `Area is ${this.getArea()}.`;
  }
}
 
demo/triangle-duplicate.js
class ColorTriangle {
  constructor(a, b, color) {
    this.a = a;
    this.b = a;
    this.color = color;
  }

  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(
        this.a ** 2 + this.b ** 2);
  }

  describe() {
    return `Area is ${this.getArea()}.` +
        ` Color is ${this.color}!`;
  }
}
demo/triangle-extends.js
class Triangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(
        this.a ** 2 + this.b ** 2);
  }

  describe() {
    return `Area is ${this.getArea()}.`;
  }
}
 
demo/triangle-extends.js
class ColorTriangle extends Triangle {
  constructor(a, b, color) {
    // call parent constructor with (a, b)
    super(a, b);
    this.color = color;
  }

  // will "inherit" getArea, getHypotenuse

  // "override" describe() w/new version  

  describe() {
    return super.describe() +
        ` Color is ${this.color}!`;
  }
}
Multi-Level Inheritance
demo/triangle-extends.js
class ColorTriangle extends Triangle {
  constructor(a, b, color) {
    // call parent constructor with (a, b)
    super(a, b);
    this.color = color;
  }

  // will "inherit" getArea, getHypotenuse

  // "override" describe() w/new version  

  describe() {
    return super.describe() +
        ` Color is ${this.color}!`;
  }
}
 
demo/triangle-extends.js
class InvisTriangle extends ColorTriangle {
  constructor(a, b) {
    // call parent constructor  
    super(a, b, "invisible");
  }

  // still inherit getArea, getHypotenuse

  describe() {
    return "You can't see me!";
  }
}
Often end up with “class hierarchy”:


Terminology
Instance
an individual instance; an array is “instance” of Array
Class
blueprint for making instances
Property
piece of data on an instance (e.g. myTriangle.a)
most languages call this idea an “instance attribute”
Method
function defined by a class, can call on instance
most accurate to call these “instance methods”
Parent / Superclass
More general class you inherit from
Rectangle might be parent of Square
Child / Subclass
More specific class (a Square is a special kind of Rectangle)
Inherit
Ability to call methods/get properties defined on ancestors
Object Oriented Programming
Using classes & instances to manage data & functionality together
Often makes it easier to manage complex software requirements
Looking Ahead
More about this
Additional OO Concepts
Python OO
Oldschool JavaScript OOP





///// This Keyword ///////


This & Bind
This
_images/this-is-bullshit.png
Mystery of the Undefined Fluffy
demo/fluffy.js
class Cat {
  constructor(name) {
    this.name = name;
  }

  dance(style) {
    return `Meow, I am ${this.name}` +
        ` and I like to ${style}`;
  }
}
 
makes sense…
let fluffy = new Cat("Fluffy");

fluffy.name;             // "Fluffy"

fluffy.dance("tango")    // works!
wtf?
let fDance = fluffy.dance;

fDance("salsa");         // error?!
JavaScript “Functions”
In a sense, JavaScript doesn’t have functions.

Everything is called on something, like a method.

function whatIsThis() {
  console.log("this =", this);
}
let o = { myFunc: whatIsThis };

o.myFunc();    // get "this = o"
whatIsThis();      // wtf?!
Global Object
When you call a function on nothing …

… you call it on the “global object”

In browser JS, that’s window (the browser window)
in NodeJS, that’s global (where some Node utilities are)
You’ve relied on that, even if you didn’t realize it!

alert("Hi!");

window.alert("Hi!");   // -- same thing!
Therefore, a “function” called at the top level is same as:

window.whatIsThis()
Undefined Fluffy
demo/fluffy.js
class Cat {
  constructor(name) {
    this.name = name;
  }

  dance(style) {
    return `Meow, I am ${this.name}` +
        ` and I like to ${style}`;
  }
}
 
so… what’s happening here?
let fluffy = new Cat("Fluffy");

fluffy.name;             // "Fluffy"

fluffy.dance("tango")    // works!

let fDance = fluffy.dance;

fDance("salsa");         // error?!
fluffy.dance("tango");
Find the dance method on fluffy
Call the dance method on fluffy — yay!
let fDance = fluffy.dance;
fDance("tango");
Find the dance method on fluffy
Call the dance method on the global window — ut oh
Call
Sometimes, you’ll need to say “call this function on this object”

That’s what call() is for!

let fDance = fluffy.dance;

// call on fluffy, passing "tango" as arg
fDance.call(fluffy, "tango");
whatIsThis.call(fluffy);       // this = fluffy
apply()

There is a related function, apply(): for this, you can pass the list of arguments to the function as an array, rather than passing one-by-one.

This used to be a very important technique, since it was the only reasonable way to call a function that expected several individual arguments where you already had those arguments in a list:

Math.max(1, 2, 3);       // Math.max expects indiv arguments

let myNums = [1, 2, 3];  // If you already have an array ...

Math.max.apply(null, myNums);  // pass that array as indiv arguments
                               // (don't care what "this" is, so pass `null`)
Nowadays, however, this is much more easily done with the spread operator:

Math.max(...myNums);
Bind
You can “perma-bind” a function to a context:

fDance("tango");       // error -- this isn't the cat

fDance.call(fluffy, "tango");   // ok but tedious to always do

let betterDance = fDance.bind(fluffy);

betterDance("tango");  // ok -- bound so that `this` is Fluffy
bind is a method on functions that returns a bound copy of the function.

Binding Arguments
You can also bind arguments to functions. That will bake them into the function.

function applySalesTax(taxRate, price) {
  return price + price * taxRate;
}

// "null" for "this" means it doesn't matter what "this" is
const applyCASalesTax = applySalesTax.bind(null, 0.0725);
applyCASalesTax(50);  // 53.63
Where This Comes Up
Callback on Methods
Want to have object method as callback:

myBtn.addEventListener("click", fluffy.dance);
That won’t work – browser will call dance on global object :(

myBtn.addEventListener("click", fluffy.dance.bind(fluffy));
That will work — when it calls that callback, it will always be on Fluffy!

Pre-Binding Calls
Imagine we want three buttons which call popUp, but with different args:

demo/buttons-meh.html
<button id="a">A</button>
<button id="b">B</button>
<button id="c">C</button>
 
demo/buttons-meh.html
function popUp(msg) {
  alert("Secret message is " + msg);
}

function handleClick(evt) {
  let id = evt.target.id;

  if (id === "a") popUp("Apple");
  else if (id === "b") popUp("Berry");
  else if (id === "c") popUp("Cherry");
}

const get = document.getElementById.bind(document);

get('a').addEventListener("click", handleClick);
get('b').addEventListener("click", handleClick);
get('c').addEventListener("click", handleClick);
demo/buttons.html
function popUp(msg) {
  alert("Secret message is " + msg);
}

const get = document.getElementById.bind(document);

get('a').addEventListener("click", popUp.bind(null, "Apple"));
get('b').addEventListener("click", popUp.bind(null, "Berry"));
get('c').addEventListener("click", popUp.bind(null, "Cherry"));
Arrow Functions
Arrow functions don’t make their own this

demo/timeout.html
class Cat {
  constructor(name) {
    this.name = name;
  }

  superGreet() {
    alert(`#1: I am ${this.name}`);   // works, obvs

    setTimeout(function () {
      alert(`#2 I am ${this.name}`);  // ut oh
    }, 500);

    setTimeout(() => {
      alert(`#3 I am ${this.name}`);  // yay!
    }, 1000);
  }
}

let kitty = new Cat("Kitty");
kitty.superGreet();
Looking Ahead
Additional OO Concepts
Class properties
Static methods
Python OO
Function-based JS “classes”



anything to the left of the . on a method is the 'this' object. If there is no ., then the WINDOW!

'use strict' -> strict mode. Changes value of this also. Classes automatically run in strict mode. 

call() -> specifies what THIS will be
first argument will be the 'this', other argument will be normal arguments
const cat = {
  name: 'Blue',
  dance : function(dance) {
    console.log(`I like to ${dance})
  }
}

const blueDance = cat.dance;
blueDance.call(cat, "salsa")

call is a one time thing


bind() -> permanently bind an object to the function. doesn't execute function.
const bDance = blueDance.bind(cat)
bDance('salsa') // I like to salsa
could also refactor -> const blueDance = cat.dance.bind(cat);

































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































*/