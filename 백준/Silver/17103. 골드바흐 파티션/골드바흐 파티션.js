const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const [num, ...rest] = input;
  const result = [];

  for (let i = 0; i < Number(num); i++) {
    let count = 0;
    const isPrime = getPrimeTable(Number(rest[i]));
    for (let j = 2; j <= Number(rest[i]) / 2; j++) {
      if (isPrime[j] && isPrime[Number(rest[i]) - j]) {
        count++;
      }
    }

    result.push(count);
  }
  

  return result.join("\n")
};


function getPrimeTable(n) {
  const isPrime = Array(n + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  const limit = Math.floor(Math.sqrt(n));

  for (let i = 2; i <= limit; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime;
}


console.log(solution(input));
