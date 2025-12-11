const input = require('fs')
	.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
	.toString()
	.trim()
	.split('\n');

const solution = (input) => {
	const [r, c] = input[0].split(' ').map(Number);
	const inputArr = input.slice(1);

	let count = 0;

	for (let i = 0; i < r - 7; i++) {
		for (let j = 0; j < c - 7; j++) {
			count = Math.max(checkBoard(i, j, inputArr), count);
		}
	}

	return 64 - count;
};

function checkBoard(x, y, board) {
	let whiteCount = 0;
	let blackCount = 0;
	const WHITE_FIRST = [
		'WBWBWBWB',
		'BWBWBWBW',
		'WBWBWBWB',
		'BWBWBWBW',
		'WBWBWBWB',
		'BWBWBWBW',
		'WBWBWBWB',
		'BWBWBWBW',
	];

	const BLACK_FIRST = [
		'BWBWBWBW',
		'WBWBWBWB',
		'BWBWBWBW',
		'WBWBWBWB',
		'BWBWBWBW',
		'WBWBWBWB',
		'BWBWBWBW',
		'WBWBWBWB',
	];

	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			// white
			if (WHITE_FIRST[i][j] === board[i + x][j + y]) {
				whiteCount++;
			}

			// black
			if (BLACK_FIRST[i][j] === board[i + x][j + y]) {
				blackCount++;
			}
		}
	}

	return Math.max(whiteCount, blackCount);
}

console.log(solution(input));
