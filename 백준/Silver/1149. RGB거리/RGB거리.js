const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const [total, ...rest] = input;
  
  const arr = [];
  const N = Number(total);
  const dp = Array.from({ length: N }, () => Array(3).fill(0));
  for (i = 0; i < N; i++) {
    arr.push(rest[i].split(" ").map(Number));
  }

  dp[0][0] = arr[0][0];
  dp[0][1] = arr[0][1];
  dp[0][2] = arr[0][2];

  for (let i = 1; i < N; i++) {
    dp[i][0] = arr[i][0] + Math.min(dp[i-1][1], dp[i-1][2]);
    dp[i][1] = arr[i][1] + Math.min(dp[i-1][0], dp[i-1][2]);
    dp[i][2] = arr[i][2] + Math.min(dp[i-1][0], dp[i-1][1]);
  }

  return Math.min(dp[N-1][0],dp[N-1][1], dp[N-1][2]);
};

console.log(solution(input));
