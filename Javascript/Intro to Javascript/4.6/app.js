let weirdObj = {
	hereIsAKey: 'here is a value!',
	'10': 'number key!',
	thisIsABoolean: true,
	'5': 'another number key!',
	nullValue: null
};

//multiplication table
let times_table;
for (let i = 1; i <= 10; i++) {
	times_table = '';
	for (let j = 1; j <= 10; j++) {
		times_table += j * i + ' ';
	}

	console.log(times_table);
}

const animals = [ 'lions', 'tigers', 'bears' ];

for (let animal of animals) {
	console.log(animal);
}
for (let i = 0; i < animals.length; i++) {
	console.log(animals[i]);
}

for (let i in animals) {
	console.log(animals[i]);
}

for (let keys in weirdObj) {
	console.log(keys, ':', weirdObj[keys]);
}
Object.assign();
