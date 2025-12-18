const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const [total, ...rest] = input;

  let answer = 0;
  const baseballArr = [];

  for (let i = 0; i < rest.length; i++) {
    baseballArr.push(rest[i].split(" "));
  }

  for (let i = 123; i <= 987; i++) {
    const stringNum = String(i);
    const [hunds, tens, units] = stringNum.split("");
    if (stringNum.includes("0") || units === tens || tens === hunds || hunds === units) continue;
    
    let success = 0;
    for (let j = 0; j < Number(total); j++) {
      const {strikes, balls} = guessNum(stringNum, baseballArr[j][0])

      if (strikes === baseballArr[j][1] && balls === baseballArr[j][2]) {
        success++;
      }
    }

    if (success === Number(total)) answer++;
  }


  return answer;
};

function guessNum(secretNumber, guessNumber) {
  let strikes = 0;
  let balls = 0;

  for (let i = 0; i <= 2; i++) {
    if (secretNumber[i] === guessNumber[i]) {
      strikes++;
    } else if (secretNumber.includes(guessNumber[i])) {
      balls++;
    }
  }

  return {strikes: String(strikes), balls: String(balls)}
}

console.log(solution(input));
