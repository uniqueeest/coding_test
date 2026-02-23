const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const str = input[0];
  const minusArr = str.split('-');

  let result = 0;

  for (let i = 0; i < minusArr.length; i++) {
    const total = minusArr[i]
      .split('+')
      .map(Number)
      .reduce((acc, cur) => acc + cur, 0);

    if (i === 0) {
      result += total;
    } else {
      result -= total;
    }
  }

  return result;
};

console.log(solution(input));
