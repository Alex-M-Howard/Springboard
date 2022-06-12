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
*/



