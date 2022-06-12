function rankingSystem(arr) {
	const rankings = [];
	const arr2 = [];
	const sortedArr = [];

	for (let i = 0; i < arr.length; i++) {
		rankings[i] = 0;
		arr2[i] = arr[i];
	}

	while (sortedArr.length < arr2.length) {
		let max = Math.max(...arr2);
		if (!sortedArr.includes(max)) {
			sortedArr.push(max);
		}
		else {
			arr2[arr2.indexOf(max)] = 0;
		}
	}

	for (let i = 0; i < arr.length; i++) {
		let index = arr.indexOf(sortedArr[i]);
		rankings[index] = i + 1;
	}

	return rankings;
}

rankingSystem([ 1, 20, 5, 10 ]);
