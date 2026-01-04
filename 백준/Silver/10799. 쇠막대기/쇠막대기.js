const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const arr = input[0];

  let result = 0;
  let open = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      open++;
    } else {
      open--;

      if (arr[i - 1] === "(") {
        result += open;
      } else {
        result += 1;
      }
    }
  }

  return result;
};

console.log(solution(input));
