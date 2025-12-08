const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString().trim().split('\n');

const solution = (input) => {
  const inputArr = input.slice(1);
  const arr = [];
  const resultArr = [];
  
  for (let i = 0; i < inputArr.length; i++) {
    const [method, input] = inputArr[i].split(" ");
    const result = methodFunc(arr, method, input);

    if (result !== undefined) {
      resultArr.push(result);
    }
  }

  return resultArr.join("\n");
}

function methodFunc (arr, method, input) {
  if (method === "push") {
    arr.push(input);
    return;
  } else if (method === "pop") {
    return arr.pop() ?? -1;
  } else if (method === "size") {
    return arr.length;
  } else if (method === "empty") {
    return arr.length === 0 ? 1 : 0;
  } else if (method === "top") {
    return arr[arr.length - 1] ?? -1;
  }
}

console.log(solution(input))