const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const [n, rest] = input;
  const N = Number(n);
  const arr = rest.split(' ').map(Number);

  const visited = Array.from({ length: N }, () => false);
  let best = -Infinity;

  function dfs(depth, prev, sum) {
    if (depth === N) {
      if (sum > best) {
        best = sum;
      }
      return;
    } else {
      for (let i = 0; i < N; i++) {
        if (visited[i]) continue;

        visited[i] = true;

        if (depth === 0) {
          dfs(depth + 1, arr[i], sum);
        } else {
          dfs(depth + 1, arr[i], sum + Math.abs(prev - arr[i]));
        }

        visited[i] = false;
      }
    }
  }

  dfs(0, 0, 0);
  return best;
};

console.log(solution(input));
