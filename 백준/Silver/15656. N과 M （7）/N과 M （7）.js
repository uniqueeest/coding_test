const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const [N, M] = input[0].split(' ').map(Number);
  const numArr = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  const arr = Array.from({ length: N }, (_, i) => numArr[i]);
  const selected = [];

  let answer = '';

  function dfs(arr, depth) {
    if (depth === M) {
      const result = [];
      for (let i of selected) {
        result.push(arr[i]);
      }

      for (let r of result) {
        answer += `${r} `;
      }

      answer += '\n';
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      selected.push(i);
      dfs(arr, depth + 1);
      selected.pop();
    }
  }

  dfs(arr, 0);

  return answer;
};

console.log(solution(input));
