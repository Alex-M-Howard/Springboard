// let grades = [ 99, 98, 76, 54, 66, 90, 81 ];
// let sum = 0;
// for (let i = 0; i <= grades.length; i++) {
// 	sum += grades[i];
// }

// let avg = sum / grades.length;

// console.log(avg)
//Using the debugger you can see the i conditional in the for loop
//that we should be doing i < grades.length, instead of <=

console.log('an error is coming....');

try {
    throw new Error('Oh no!');
} catch (err) {
    console.log('What kind of error?', err.name);
    console.log('what is the message?', err.message);
    console.log('where did it happen?', err.stack);
}