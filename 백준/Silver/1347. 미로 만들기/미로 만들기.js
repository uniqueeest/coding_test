const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const [n, ...rest] = input;
  const commands = rest[0];

  // 남쪽 (북쪽 0 기준)
  let dir = 2;

  const dr = [-1, 0, 1, 0];
  const dc = [0, 1, 0 , -1];

  let r = 0, c = 0;
  const visited = new Set();

  visited.add('0,0')

  let minR = 0, maxR = 0, minC = 0, maxC = 0;

  for (let cmd of commands) {
    if (cmd === "R") {
      dir = (dir + 1) % 4;
    } else if (cmd === "L") {
      dir = (dir + 3) % 4;
    } else {
      r += dr[dir];
      c += dc[dir];
      visited.add(`${r},${c}`);

      minR = Math.min(r, minR);
      maxR = Math.max(r, maxR);
      minC = Math.min(c, minC);
      maxC = Math.max(c, maxC);
    }
  }

  const result = [];

  for (let i = minR; i <= maxR; i++) {
    let row = "";
    for (let j = minC; j <= maxC; j++) {
      row += visited.has(`${i},${j}`) ? "." : "#";
    }

    result.push(row);
  }

  return result.join("\n");
};



console.log(solution(input));
