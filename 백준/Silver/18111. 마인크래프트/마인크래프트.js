const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const [blockArr, ...rest] = input;

  let blockInInventory = Number(blockArr.split(' ')[2]);
  const blockHeight = [];

  for (let i = 0; i < rest.length; i++) {
    const block = rest[i].split(' ');
    blockHeight.push(...block.map((value) => Number(value)));
  }

  let maxH = 256;
  const maxHeightInArr = Math.max(...blockHeight);

  let currentH = 0;
  let sec = Infinity;
  

  for (let i = 0; i <= 256; i++) {
    if (maxHeightInArr < maxH) {
      maxH -= 1;
      continue;
    } 

    let currSec = 0;
    blockInInventory = Number(blockArr.split(' ')[2]);

    for (let j = 0; j < blockHeight.length; j++) {
      const diff = maxH - blockHeight[j];
      if (diff > 0) {
        blockInInventory -= diff;
        currSec += diff;
      } else if (diff < 0) {
        blockInInventory -= diff;
        currSec += 2 * Math.abs(diff);
      }
    }

    if (blockInInventory >= 0) {
      if (sec > currSec) {
        sec = currSec;
        currentH = maxH;
      }
    }
    maxH -= 1;
  }


  return [sec, currentH].join(' ');
};

console.log(solution(input));
