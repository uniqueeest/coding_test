const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const [arr1, ...rest] = input;

  const [n, m] = arr1.split(" ").map(Number);
  const feeArr = rest.slice(0, n).map(Number);
  const weightArr = rest.slice(n, n+m).map(Number);
  const eventArr = rest.slice(n+m).map(Number);

  const empty = [];
  for (let i = 0; i < n; i++) empty.push(i);

  let totalFee = 0;
  const wait = [];
  const queue = Array.from({length: m}, () => -1)

  let idx = 0;
  while (idx < eventArr.length) {
    const event = eventArr[idx++];

    if (event > 0) {
      const car = event - 1;
      
      if (empty.length > 0) {
        const spot = empty.shift();
        queue[car] = spot;
        totalFee += feeArr[spot] * weightArr[car];
      } else {
        wait.push(car);
      }
    } else {
      const car = -event - 1;
      const spot = queue[car]
      queue[car] = -1;

      // 빈칸 추가
      empty.push(spot);
      empty.sort((a, b) => a - b);

      if (wait.length > 0) {
        const nextCar = wait.shift();
        const nextSpot = empty.shift();

        queue[nextCar] = nextSpot;
        totalFee += feeArr[nextSpot] * weightArr[nextCar]
      }
    }
  }

  return totalFee;
};

console.log(solution(input));
