const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const [n, ...rest] = input;
  const N = Number(n);
  const triangle = [];


  for (let i = 0; i < N; i++) {
    triangle.push(rest[i].split(" ").map(Number));
  }

  const dp = triangle.map(row => [...row]);
  dp[0][0] = triangle[0][0];

  for (let i = 1; i < N; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0) {
        dp[i][j] = dp[i-1][j] + triangle[i][j];
      } else if (j === i) {
        dp[i][j] = dp[i-1][j-1] + triangle[i][j];
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-1]) + triangle[i][j];
      }
    }
  }  

  return Math.max(...dp[N-1]);
};

console.log(solution(input));
