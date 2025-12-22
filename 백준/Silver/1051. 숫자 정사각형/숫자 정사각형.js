const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const [square, ...rest] = input;
  const [h, w] = square.split(' ').map(Number);

  const quad = [];
  const maxLen = Math.min(w, h);

  for (let i = 0; i < rest.length; i++) {
    quad.push(rest[i].split('').map(Number));
  }

  for (let i = maxLen - 1; i > 0; i--) {
    for (let r = 0; r + i < h; r++) {
      for (let c = 0; c + i < w; c++) {
        if (
          quad[r][c] === quad[r][c + i] &&
          quad[r][c] === quad[r + i][c] &&
          quad[r][c] === quad[r + i][c + i]
        ) {
          return (i + 1) ** 2; 
        }
      }
    }
  }

  return 1
};

console.log(solution(input));
