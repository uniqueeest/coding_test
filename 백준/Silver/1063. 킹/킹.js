const input = require('fs')
	.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
	.toString()
	.trim()
	.split('\n');

const solution = (input) => {
	const [king, stone, n] = input[0].split(" ");
	const dirArr = input.slice(1)

	const ALPHABET_WITH_NUM = {
		a: 1,
		b: 2,
		c: 3,
		d: 4,
		e: 5,
		f: 6,
		g: 7,
		h: 8,
	}
	const reverse =   Object.fromEntries(
    Object.entries(ALPHABET_WITH_NUM).map(([k, v]) => [v, k])
  )

	const splitKing = king.split("");
	const splitStone = stone.split("");

	const coordinateKing = [ALPHABET_WITH_NUM[String(splitKing[0]).toLocaleLowerCase()], Number(splitKing[1])];
	const coordinateStone = [ALPHABET_WITH_NUM[String(splitStone[0]).toLocaleLowerCase()], Number(splitStone[1])];

	for (let i = 0; i < n; i++) {
		const dir = move(dirArr[i]);

		const sumX = coordinateKing[0] + dir[0]
		const sumY = coordinateKing[1] + dir[1]

		if (sumX < 1 || sumY < 1 || sumX > 8 || sumY > 8) {
			continue;
		} else if (sumX === coordinateStone[0] && sumY === coordinateStone[1]) {
			if (coordinateStone[0] + dir[0] < 1 || coordinateStone[1] + dir[1] < 1 || coordinateStone[0] + dir[0] > 8 || coordinateStone[1] + dir[1] > 8) {
				continue;
			} else {
				coordinateKing[0] = sumX;
				coordinateKing[1] = sumY;
				coordinateStone[0] += dir[0];
				coordinateStone[1] += dir[1];
			}
		} else {
			coordinateKing[0] = sumX;
			coordinateKing[1] = sumY;
		}
	}

	const kingDir = String(reverse[coordinateKing[0]]).toUpperCase() + coordinateKing[1];
	const stoneDir = String(reverse[coordinateStone[0]]).toUpperCase() + coordinateStone[1];

	const resultArr = [kingDir, stoneDir]


	return resultArr.join("\n");
}

function move (dir) {
	switch (dir) {
		case "R":
			return [1, 0];
		case "L":
			return [-1, 0];
		case "B":
			return [0, -1];
		case "T":
			return [0, 1];
		case "RT":
			return [1, 1];
		case "LT":
			return [-1, 1];
		case "RB":
			return [1, -1];
		case "LB":
			return [-1, -1];
	}
}

console.log(solution(input));
