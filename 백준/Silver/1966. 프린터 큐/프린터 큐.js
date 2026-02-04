const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const [a, ...rest] = input;
  const total = Number(a);

  const arr = Array.from({ length: total }, () => []);

  for (let i = 0; i < total * 2; i++) {
    const caseArr = rest[i].split(' ').map(Number);
    if (i % 2 === 0) {
      arr[i / 2].push(caseArr);
    } else {
      arr[(i - 1) / 2].push(caseArr);
    }
  }

  const result = [];

  for (let i = 0; i < total; i++) {
    const [_, M] = arr[i][0];
    const priorities = arr[i][1];

    const queue = priorities.map((p, idx) => [p, idx === M]);

    let printed = 0;

    while (queue.length) {
      const [p, isTarget] = queue.shift();

      // 더 큰 우선순위가 남아있으면 뒤로 보냄
      if (queue.some(([q]) => q > p)) {
        queue.push([p, isTarget]);
        continue;
      }

      printed++;
      if (isTarget) {
        result.push(printed);
        break;
      }
    }
  }

  return result.join('\n');
};

console.log(solution(input));
