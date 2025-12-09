const input = require('fs')
	.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
	.toString()
	.trim()
	.split('\n');

const solution = (input) => {
	const [data, studentTotal, ...students] = input.slice(1);

	const map = new Map(data.split(' ').map((v, i) => [i + 1, v]));
	const total = map.size;

	for (let i = 0; i < studentTotal; i++) {
		const studentData = students[i].split(' ');

		studentFunc(map, studentData[0], Number(studentData[1]), total);
	}

  const values = Array.from(map.values());
  const lines = [];

  for (let i = 0; i < values.length; i += 20) {
    lines.push(values.slice(i, i + 20).join(" "));
  }

  return lines.join("\n");
};

function studentFunc(map, gender, num, arrLength) {
	// 남
	if (gender === '1') {
		const len = Math.floor(arrLength / num);

		for (let i = 1; i <= len; i++) {
			const currentNum = map.get(num * i);
			map.set(num * i, convertNum(currentNum));
		}

		return map;
	} else {
		const len = Math.ceil(arrLength / 2);

		map.set(num, convertNum(map.get(num)));

		for (let i = 1; i <= len; i++) {
			if (map.get(num - i) === map.get(num + i)) {
				map.set(num - i, convertNum(map.get(num - i)));
				map.set(num + i, convertNum(map.get(num + i)));
			} else {
				break;
			}
		}

		return map;
	}
}

function convertNum(num) {
	return num === '1' ? '0' : '1';
}

console.log(solution(input));
