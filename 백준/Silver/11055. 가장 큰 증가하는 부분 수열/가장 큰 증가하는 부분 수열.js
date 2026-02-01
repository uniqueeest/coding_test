const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const N = Number(input[0]);
  const arr = input[1].split(' ').map(Number);

  const dp = Array.from({ length: N }, (_, idx) => arr[idx]);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + arr[i]);
      }
    }
  }

  return Math.max(...dp);
};

console.log(solution(input));
