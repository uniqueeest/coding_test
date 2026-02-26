const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const N = Number(input[0]);

  const visited = Array.from({ length: N }, () => false);

  const result = [];
  let out = '';

  function dfs(depth) {
    if (depth === N) {
      out += result.join(' ') + '\n';
      return;
    }
    for (let i = 1; i <= N; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      result.push(i);
      dfs(depth + 1);
      result.pop(i);
      visited[i] = false;
    }
  }

  dfs(0);

  return out;
};

console.log(solution(input));
