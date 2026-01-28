const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const N = Number(input[0]);
  const arr = input[1].split(' ').map(Number);

  const dp = Array.from({ length: N + 1 }, () => 1);

  for (let i = 1; i < N; i++) {
    for (let j = 0; j <= i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
};

console.log(solution(input));
