/* 
The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
*/

function longestDigitsPrefix(inputString: string): string {
	let prefix = "";

	for (let char of inputString) {
		const num = parseInt(char);
		if (isNaN(num)) {
			break;
		}
		prefix += char;
	}

	return prefix;
}

console.log(longestDigitsPrefix("123aa1"));
