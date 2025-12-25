const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const inputStr = input[0];

  const result = [];
  let str = '';

  for (let i = 0; i < inputStr.length; i++) {
    if (inputStr[i] === ' ') {
      if (str.includes('<')) {
        str += inputStr[i];
      } else {
        result.push(`${str.split('').reverse().join('')} `);
        str = '';
      }
    } else if (inputStr[i] === '<') {
      if (str.length !== 0) {
        result.push(`${str.split('').reverse().join('')}`);
        str = '';
      }

      str += inputStr[i];
    } else if (inputStr[i] === '>') {
      str += inputStr[i];
      result.push(str);
      str = '';
    } else if (i === inputStr.length - 1) {
      str += inputStr[i];
      str.split('').reverse().join('');
      result.push(str.split('').reverse().join(''));
    } else {
      str += inputStr[i];
    }
  }

  return result.join('');
};

console.log(solution(input));
