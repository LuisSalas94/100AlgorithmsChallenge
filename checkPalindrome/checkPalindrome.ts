function checkPalindrome(inputString: string): boolean {
	let reversed = inputString.toLowerCase().split("").reverse().join("");
	return reversed === inputString;
}

console.log(checkPalindrome("aabaa"));
console.log(checkPalindrome("abac"));
console.log(checkPalindrome("a"));
