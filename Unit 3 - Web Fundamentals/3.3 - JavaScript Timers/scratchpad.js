// First Class Examples
function greet() {
    console.log('I love you')
}

function diss() {
    console.log('You suck')
}

function repeatThreeTimes(func) {
    func();
    func();
    func();
}
// repeatThreeTimes(greet);


function repeat(num, func) {
    for (let i = 0; i < num; i++){
        func()
    }
}


//

//storing function in a variable or array

let funcs = [greet, diss]
// funcs[0]() -> greet function runs


const myFunc = function add(x, y) { return x + y; }
// myFunc(5, 5);  -> 10
//


//returning function

function giveBirth() {
    console.log('GIVING BIRTH!!!')
    return function cry() {
        return "WaAAAAHHHH";
    }
}

// giveBirth() -> console logs giving giveBirth
// giveBirth()() -> console logs giving birth and also puts out wahhhh

function makeMultiplyFunc(num) {
    return function mult(x) {  //with this we can create functions that double etc....
        return num * x;
    }
}

const quadruple = makeMultiplyFunc(4);
const double = makeMultiplyFunc(2);
const triple = makeMultiplyFunc(3);
//



// greet();
// setTimeout(diss, 3000);  //These are two SEPARATE sets
// setTimeout(diss, 1000);  //Will execute one after the 1 second mark, other after 3. NOT 4 seconds total :)
// greet();


// setInterval(greet, 2000);
// diss()
// diss()

// greet()
// setTimeout(function(){
//     diss();
//     diss();
//     diss();
// }, 1000);
// greet();

const printOne = function () {
    console.log(1);
}