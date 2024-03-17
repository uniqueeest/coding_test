function solution(progresses, speeds) {
    const answer = progresses.map((progress, index) =>(Math.ceil((100 - progress) / speeds[index])));
    
    let compare = answer[0];
    let lastAnswer = [];
    let number = 0;
    
    for (let i =0; i < answer.length; i++) {
        if (answer[i] <= compare) {
            number++;
        } else {
            lastAnswer.push(number);
            number = 1;
            compare = answer[i]
        }
    }
    lastAnswer.push(number);
     
    return lastAnswer;
}