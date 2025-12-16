const input = require('fs')
	.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
	.toString()
	.trim()
	.split('\n');

const solution = (input) => {
	const [n, ...rest] = input;

	const len = convertNum(n);
	const sortNumArr = rest.sort((a, b) => convertNum(a) - convertNum(b));
	const avg = Math.round(rest.reduce((a, b) => convertNum(a) + convertNum(b), 0) / len);
	const midLength = Math.round(len / 2);
	const map = new Map();
	const set = new Set();

	for (let i = 0; i < len; i++) {
		if (map.get(convertNum(sortNumArr[i]))) {
			map.set(convertNum(sortNumArr[i]), map.get(convertNum(sortNumArr[i])) + 1)
		} else {
			map.set(convertNum(sortNumArr[i]), 1)
		}
	}

	let mode = 0;

	for (let i = 0; i < len; i++) {
		const num = convertNum(sortNumArr[i])
		if (map.get(num) === mode) {
			set.add(num);
		} else if (map.get(num) > mode) {
			mode = map.get(num);
			set.clear()
			set.add(num);
		}
	}

	const modeArr =	[];
	set.forEach((value) => modeArr.push(value));

	// 평균
	const avgWithZero = avg === -0 ? 0 : avg

	// 중앙
	const midNum = convertNum(sortNumArr[midLength - 1]);

	// 최빈
	const modeNum = set.size === 1 ? modeArr[0] : modeArr[1];

	// 범위 
	const range = convertNum(sortNumArr[len - 1]) - convertNum(sortNumArr[0]);

	return [avgWithZero, midNum, modeNum, range].join("\n");
}

function convertNum (value) {
	return Number(value);
}

console.log(solution(input));
