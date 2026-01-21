const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const [n, ...rest] = input;

  const dp = [];
  dp[0] = 1;
  dp[1] = 2;
  dp[2] = 4;

  for (let i = 3; i <= 10; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  const arr = rest.map((value) => dp[Number(value - 1)]);
  return arr.join('\n');
};

console.log(solution(input));
