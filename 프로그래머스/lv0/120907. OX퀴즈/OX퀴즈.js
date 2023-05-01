function solution(quiz) {
    let answer = [];
    for (let i=0; i<quiz.length; i++) {
        answer.push(quiz[i].split(" "));
    }
    
    let result = [];
    for (let i=0; i<answer.length; i++) {
        if (answer[i][1] === "+") {
            if (parseInt(answer[i][0]) + parseInt(answer[i][2]) === parseInt(answer[i][4])) result.push("O");
            else result.push("X");
        } else {
            if (parseInt(answer[i][0]) - parseInt(answer[i][2]) === parseInt(answer[i][4])) result.push('O');
            else result.push("X");
        }
    }
    
    return result;
    
}