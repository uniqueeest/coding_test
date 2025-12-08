const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const [N, ...words] = input;
  let num = 0;

  for (let i = 0; i < words.length; i++) {
    const map = new Set();
    for (let j = 0; j < words[i].length; j++) {
      if (map.has(words[i][j]) && words[i][j] !== words[i][j - 1]) {
        break;
      }
      map.add(words[i][j]);

      if (j === words[i].length - 1) num++;
    }
  }
  return num;
};

console.log(solution(input));
