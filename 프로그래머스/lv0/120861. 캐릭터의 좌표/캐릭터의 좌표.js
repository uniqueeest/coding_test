function solution(keyinput, board) {
  let answer = [0, 0];
  let max = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];
  
  keyinput.forEach((e) => {
      switch(e) {
          case 'left' :
          if (!(answer[0] === -max[0])) answer[0]--;
          break;
              
          case 'right' :
          if (!(answer[0] === max[0])) answer[0]++;
          break;
              
          case 'up' :
          if (!(answer[1] === max[1])) answer[1]++;
          break;
              
          case 'down' :
          if (!(answer[1] === -max[1])) answer[1]--;
          break;
      }
      })
  return answer;
}