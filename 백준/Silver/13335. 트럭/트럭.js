const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const [a, b] = input;
  const [n, w, l] = a.split(" ").map(Number);
  const truckArr = b.split(" ").map(Number);


  let sec = 0;
  let total = 0;
  const queue = Array.from({
    length: w
  }, () => 0)

  while (!(truckArr.length === 0 && queue.every((value) => value === 0))) {
    sec++;
    total -= queue.shift();

    if (truckArr.length > 0 && total + truckArr[0] <= l) {
      const truck = truckArr.shift();
      queue.push(truck);
      total += truck;
    } else {
      queue.push(0);
    }
  }

  return sec;
};

console.log(solution(input));
