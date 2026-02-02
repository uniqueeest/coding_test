const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const [a, ...rest] = input;
  const [w, h] = a.split(' ').map(Number);

  const arr = [];

  for (let i = 0; i < w; i++) {
    arr.push(rest[i].split(' ').map(Number));
  }

  const dp = Array.from({ length: w }, () =>
    Array.from({ length: h }, () => 0)
  );

  dp[0][0] = arr[0][0];

  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      if (i === 0) {
        if (j === 0) continue;
        else dp[0][j] = dp[0][j - 1] + arr[0][j];
      } else if (j === 0) {
        if (i === 0) continue;
        else dp[i][0] = dp[i - 1][0] + arr[i][0];
      } else {
        dp[i][j] =
          Math.max(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + arr[i][j];
      }
    }
  }

  const result = [];

  for (let i = 0; i < dp.length; i++) {
    result.push(Math.max(...dp[i]));
  }

  return Math.max(...result);
};

console.log(solution(input));
