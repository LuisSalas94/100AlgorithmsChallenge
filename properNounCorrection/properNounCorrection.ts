function properNounCorrection(noun: string): string {
	const firstChar = noun[0].toUpperCase();
	const restOfTheWord = noun.slice(1, noun.length).toLowerCase();

	return firstChar.concat(restOfTheWord);
}

console.log(properNounCorrection("pARiS"));
console.log(properNounCorrection("John"));
