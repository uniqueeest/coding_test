const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const [N, M] = input[0].split(' ').map(Number);

  const arr = Array.from({ length: N }, (_, i) => i + 1);
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
      if (selected[selected.length - 1] > i) continue;
      selected.push(i);
      dfs(arr, depth + 1);
      selected.pop();
    }
  }

  dfs(arr, 0);

  return answer;
};

console.log(solution(input));
