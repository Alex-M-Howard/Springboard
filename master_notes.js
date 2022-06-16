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



*/