function solution(absolutes, signs) {
    let answer = [];
    for (let i=0; i < absolutes.length; i++) {
        if (signs[i]) answer.push(absolutes[i]);
        else answer.push(`-${absolutes[i]}`)
    }
    
    return answer.reduce((a, b) => parseInt(a) + parseInt(b));
}