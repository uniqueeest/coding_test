const input = require('fs')
	.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
	.toString()
	.trim()
	.split('\n');

const solution = (input) => {
  const boardArr = input.slice(0, 5);
  const _numArr = input.slice(5, 10);

  const numberArray = [];
  const board = []

  for (let i in _numArr) {
    numberArray.push(..._numArr[i].split(" "));
    board.push(boardArr[i].split(" "));
  }

  const boardObj = {};

  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      boardObj[board[r][c]] = {r, c};
    }
  }

  // 개수
  const rowCount = Array(5).fill(0);
  const columnCount = Array(5).fill(0);
  let diagonalCount = 0;
  let reverseDiagonalCount = 0;

  // 체크
  const rowCheck = Array(5).fill(false);
  const columnCheck = Array(5).fill(false);
  let diagonalCheck = false;
  let reverseDiagonalCheck = false;

  // 빙고 줄 수
  let completeLine = 0;

  for (let i = 0; i < numberArray.length; i++) {
    const num = numberArray[i];
    const { r, c } = boardObj[num];

    // 행
    rowCount[r]++;
    if (rowCount[r] === 5) {
      rowCheck[r] = true;
      completeLine++
    }

    // 열
    columnCount[c]++;
    if (columnCount[c] === 5) {
      columnCheck[c] = true;
      completeLine++
    }

    // 대각
    if (r === c) {
      diagonalCount++;
      if (diagonalCount === 5) {
        diagonalCheck = true;
        completeLine++
      }
    }

    // 역대각
    if (r + c === 4) {
      reverseDiagonalCount++;
      if (reverseDiagonalCount === 5) {
        reverseDiagonalCheck = true;
        completeLine++
      }
    }

    if (completeLine >= 3) {
      return i + 1;
    }

  }
  
};


console.log(solution(input));
