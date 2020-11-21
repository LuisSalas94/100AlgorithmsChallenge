function avoidObstacles(inputArray: number[]): number {
	inputArray = inputArray.sort((a, b) => {
		return a - b;
	});

	const largestArrayVal = inputArray[inputArray.length - 1];

	for (let i = 1; i <= largestArrayVal + 1; i++) {
		if (inputArray.every((ele) => ele % i !== 0)) {
			return i;
		}
	}
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
