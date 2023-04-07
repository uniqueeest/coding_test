function solution(array, commands) {
    var answer = [];
    for (let i=0; i<commands.length; i++) {
        let answer2 = [];
        for (let j=commands[i][0]-1; j<commands[i][1]; j++) {
            answer2.push(array[j]);         
        }
        answer.push(answer2.sort((a, b) => a - b)[commands[i][2] - 1]);
        console.log(answer)
        
    }
    return answer;
}