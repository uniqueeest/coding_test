const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const arr = input[0].split('');
  const set = new Set();

  for (let i = 0; i < arr.length; i++) {
    let ans = '';
    for (let j = i; j >= 0; j--) {
      ans += arr[j];

      set.add(ans);
    }
  }

  return set.size;
};

console.log(solution(input));
