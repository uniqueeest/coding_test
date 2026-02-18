const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const [N, M] = input[0].split(' ').map(Number);
  const arr = input
    .slice(1, N + 1)
    .map((value) => value.split(' ').map(Number));
  const data = input
    .slice(N + 1, input.length)
    .map((value) => value.split(' ').map(Number));

  const dp = Array.from({ length: N + 1 }, () =>
    Array.from({ length: N + 1 }, () => 0)
  );

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      dp[i][j] =
        arr[i - 1][j - 1] + dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1];
    }
  }

  const result = [];

  for (let i = 0; i < data.length; i++) {
    const [x1, y1, x2, y2] = data[i];
    const sum =
      dp[x2][y2] - dp[x1 - 1][y2] - dp[x2][y1 - 1] + dp[x1 - 1][y1 - 1];

    result.push(sum);
  }

  return result.join('\n');
};

console.log(solution(input));
