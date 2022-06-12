//Different errors
/*
syntax error - something is typed incorrectly
reference error - variable is being referenced that doesn't exist, or isn't in same scope
type error- Trying to do something with a variable that is not possible of a certain type. String method on an int for example
*/


//Anatomy of an error message
/*

Uncaught SyntaxError: Unexpected app.js:6 token ';'

You can see the type of error, the file name, line number, and reason
*/

//Use console.log to help you debug when you get a bug that doesn't throw an error

/*
Using JavaScript Debugger, you can use Chrome. 
It is on sources tab inside of dev tools
*/


/*
Keep it simple when writing code. Use === instead of ==
objects & arrays are not equal to similar objects and arrays
[1,2,3] !== [1,2,3] because it is looking at the reference to a space in memory!

Calling a function with missing arguments will make those args undefined
Calling a function with extra arguments is ingored (The extra arguments are ignored)
Calling a missing property from an object/index is undefined

*/


//Error Handling
/*
Try/Catch/Finally
We can prevent the code from stopping. APIs and other people's code often does this

try {
    functionThatDoesNotExist();
} catch (err){    // You don't have to have the err be passed in. You can just use catch
    console.log("Something went wrong!", err);
}

console.log('did we make it?')

try and catch create block scope, so if you define a variable inside using let or const
it will only exist inside that block

catch is optional, but why wouldn't you use it to find out what error is happening

We can also use a finally inside try block. This will run the code inside finally every time 
even if there is an error or not.



//Let's make our own errors by using the 'throw' keyword
try {
    throw new Error('Oh no!');
} catch (err) {
    console.log('What kind of error?', err.name);
    console.log('what is the message?', err.message);
    console.log('where did it happen?', err.stack);
}

Use when you want to hide errors from a user
Use when you want to create custom errors for user
Nice fallback so your code doesn't fail during unforseen circumstances
it can haide overly-technical error messages
Can help you find where an error occurs


*/

function DateError(message) {
    this.message = message;
    this.name = 'DateError';
}

function getMonthName(mo) {
    if (typeof mo !== 'number') {
        throw new DateError('Month number must be a number!');
    }
    mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    
    if (months[mo]) {
        return months[mo];
    } else {
        throw new DateError("Month out of bounds")
    }
}

try {
    getMonthName('asda');
} catch (err) {
    console.log("ERROR:", err)
}