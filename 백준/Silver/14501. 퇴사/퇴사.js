const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const [n, ...rest] = input;
  const N = Number(n);
  const arr = [];

  for (let i = 0; i < N; i++) {
    arr.push(rest[i].split(' ').map(Number));
  }

  const dp = Array.from({ length: N + 1 }, () => 0);

  for (let i = 0; i < N; i++) {
    // 상담 x
    dp[i + 1] = Math.max(dp[i + 1], dp[i]);

    const [T, P] = arr[i];
    const end = i + T;

    if (end <= N) {
      dp[end] = Math.max(dp[end], dp[i] + P);
    }
  }

  return dp[N];
};

console.log(solution(input));
