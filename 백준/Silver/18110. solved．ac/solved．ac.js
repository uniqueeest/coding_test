const input = require('fs')
	.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
	.toString()
	.trim()
	.split('\n');

const solution = (input) => {
	const [total, ...levels] = input.map(Number);

	if (total === 0) return 0;

	const cut = Math.round(total * 0.15);
	const cutLevelArr = [...levels].sort((a, b) => a - b).slice(cut, levels.length - cut);
	let cutTotal = 0;

	for (let i = 0; i < cutLevelArr.length; i++) {
		cutTotal += cutLevelArr[i];
	}

	return Math.round(cutTotal / cutLevelArr.length);
}

console.log(solution(input));
