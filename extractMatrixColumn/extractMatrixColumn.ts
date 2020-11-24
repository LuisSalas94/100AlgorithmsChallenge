function extractMatrixColumn(matrix: number[][], column: number): number[] {
	const matrixCoumn = [];

	matrix.forEach((row) => {
		return matrixCoumn.push(row[column]);
	});

	return matrixCoumn;
}

console.log(
	extractMatrixColumn(
		[
			[1, 1, 1, 2],
			[0, 5, 0, 4],
			[2, 1, 3, 6],
		],
		2
	)
);
