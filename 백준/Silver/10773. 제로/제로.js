const input = require('fs')
	.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
	.toString()
	.trim()
	.split('\n');

const solution = (input) => {
	const [n, ...rest] = input;

	const arr = [];

	for (let i = 0; i < rest.length; i++) {
		const value = convertNum(rest[i]);
		if (value === 0) {
			arr.pop();
		} else {
			arr.push(value);
		}
	}

	return arr.reduce((a, b) => a + b, 0);
}

function convertNum (value) {
	return Number(value);
}

console.log(solution(input));
