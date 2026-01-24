const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const [n, rest] = input;
  const N = Number(n);
  const arr = [0, ...rest.split(' ').map(Number)];
  const dp = Array.from({ length: N + 1 }, () => 0);

  dp[0] = 0;

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] + arr[j]);
    }
  }

  return dp[N];
};

console.log(solution(input));
