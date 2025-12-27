const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const [inputStr, len, ...rest] = input;

  const leftArr = inputStr.split("");
  const rightArr = [];

  for (let key of rest) {
    if (key === "L") {
      if (leftArr.length) rightArr.push(leftArr.pop());
    } else if (key === "D") {
      if (rightArr.length) leftArr.push(rightArr.pop());
    } else if (key === "B") {
      if (leftArr.length) leftArr.pop();
    } else {
      const cmd = key[2];
      leftArr.push(cmd);
    }
  }

  return leftArr.join('') + rightArr.reverse().join("");
};

console.log(solution(input));
