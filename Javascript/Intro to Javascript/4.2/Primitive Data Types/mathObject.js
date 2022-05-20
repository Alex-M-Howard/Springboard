//Math functions
console.log(Math.E);
console.log(Math.PI);
console.log(Math.floor(3.789));
console.log(Math.round(4.6));
console.log(Math.round(4.4));
console.log(Math.pow(2, 4));
console.log(Math.ceil(3.1234));
console.log(Math.random());

//Die roll from 1 to 6
console.log(Math.floor(Math.random() * 6 + 1));

//parseInt & parseFloat - parse strings into numbers, but watch out for NaN!
console.log(parseInt('24'));
console.log(parseInt('24.987')); // Stops at the decimal!
console.log(parseFloat('24.987'));
console.log(parseFloat('24'));
console.log(parseInt('I am 3 years old')); //Only works if number STARTS the string (or whitespace)
