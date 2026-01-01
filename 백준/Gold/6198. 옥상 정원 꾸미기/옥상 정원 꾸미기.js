const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const [total, ...rest] = input;
  const arr = rest.map(Number);
  
  let result = 0;
  const stack =  [];

  for (let i = Number(total) - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
      stack.pop();
    }

    const num = stack.length ? stack[stack.length - 1] : -1;
    const view = (num === -1) ? Number(total) - i - 1 : num - i - 1;

    result += view;

    stack.push(i);
  }

  return result;
};

console.log(solution(input));
