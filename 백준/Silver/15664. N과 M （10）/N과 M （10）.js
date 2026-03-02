const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const [N, M] = input[0].split(' ').map(Number);
  const inputArr = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  const started = [];
  const set = new Set();

  function dfs(curr, idx) {
    if (curr.length === M) {
      set.add(curr.join(' '));
    }

    for (let i = idx; i < N; i++) {
      curr.push(inputArr[i]);
      dfs(curr, i + 1);
      curr.pop();
    }
  }

  dfs(started, 0);

  return Array.from(set).join('\n');
};

console.log(solution(input));
