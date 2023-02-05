function insertionSort(arr) {


		let current;
		for(let i=1; i<arr.length; i++){
					if(arr[i] < arr[i-1]){
						let j=i;
						current = arr[i];
						arr.splice(i, 1);

						while(current < arr[j-1]){
							j--;
						}
						arr.splice(j, 0, current)
					}
		}
	return arr;
}

module.exports = insertionSort;