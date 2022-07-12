console.log('Timers exercise');

//Countdown
/*
Write a function called countdown that accepts a number as a parameter 
and every 1000 milliseconds decrements the value and console.logs it. 
Once the value is 0 it should log “DONE!” and stop.
*/

// function countingDown(num) {
//     num -= 1;              //This is why the need for anon function - scope
//     if (num <= 0) {
//         clearInterval(id);
//         console.log('DONE!');
//     } else {
//         console.log(num);
//     }
// }

// function countdown(num) {
//     let id = setInterval(countingDown, 1000);
// }

function countdown(num) {
	let id = setInterval(function() {
		num -= 1;
		if (num <= 0) {
			clearInterval(id);         //I didn't understand this one as you can tell by my scratchings above
            console.log('DONE!');      //I eventually figured it out and did the second example without
		}                              //having to look up the solution.
		else {
			console.log(num);
		}
	}, 1000);
}

/*
Write a function called randomGame that selects a random number 
between 0 and 1 every 1000 milliseconds and each time that a 
random number is picked, add 1 to a counter. If the number is 
greater than .75, stop the timer and console.log the number of 
tries it took before we found a number greater than .75.
*/

function randomGame() {
	let count = 0;
	let id = setInterval(function() {
        let num = Math.random();
        count += 1;
		if (num > 0.75) {
            clearInterval(id);
			console.log(`It took ${count} ${count === 1 ? 'try' : 'tries'} before we found a number greater than .75!`);
		}
	}, 1000);
}
