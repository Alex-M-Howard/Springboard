function bubbleSort(arr) {
	if(!arr.length) return arr;
	let sortDistance = arr.length-1;

	while(sortDistance){
		for(let i=0; i <= sortDistance; i++) {

			let temp;
			if (arr[i + 1] === arr.length - 1) continue;
			if (arr[i] >= arr[i + 1]) {
				temp = arr[i + 1];
				arr[i + 1] = arr[i];
				arr[i] = temp;
			}
		}
		sortDistance--;
	}

	return arr;
}

module.exports = bubbleSort;
