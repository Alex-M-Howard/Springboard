/*
Objects Exercise
For each of the exercises below, assume you are starting with the following programming object.
*/

let programming = {
	languages: [ 'JavaScript', 'Python', 'Ruby' ],
	isChallenging: true,
	isRewarding: true,
	difficulty: 8,
	jokes: 'https://bit.ly/2ysFran'
};

//Write the command to add the language “Go” to the end of the languages array.
programming.languages.push('Go');

//Change the difficulty to the value of 7.
programming.difficulty = 7;

//Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;

//Write the command to add a new key called isFun and a value of true to the programming object.
programming['isFun'] = true;
