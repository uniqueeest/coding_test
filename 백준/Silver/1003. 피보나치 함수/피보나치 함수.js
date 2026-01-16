const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const [n, ...rest] = input;
  const N = Number(n);
  const arr = rest.map(Number);

  const maxNum = Math.max(...arr, 0) 
  const dp = Array.from({length: maxNum + 1}, () => [0, 0]);
  dp[0] = [1, 0];
  dp[1] = [0, 1];

  for (let i = 2; i <= maxNum; i++) {
    dp[i][0] = dp[i - 1][0] + dp[i - 2][0];
    dp[i][1] = dp[i - 1][1] + dp[i - 2][1];
  }

  const result = arr.map((value) => dp[value].join(" "))

  return result.join("\n");
};

console.log(solution(input));
