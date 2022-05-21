let num = 11;

const movie = {
	title: 'Titanic',
	year: 1997,
	rating: 'PG-13',
	revenue: 659363944,
	director: 'James Cameron'
};

for (let i in movie) {
	console.log(i, movie[i]);
}
