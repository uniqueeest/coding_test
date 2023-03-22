function solution(s) {
    var answer = s.split("").sort()
    let dup = [];
    let not_dup = [];
    
    if (answer[answer.length -1] === answer[answer.length -2]) dup.push(answer[answer.length -1])
    for (let i=0; i<answer.length - 1; i++) {
        if (answer[i] === answer [i+1]) dup.push(answer[i]);
    }
    
    for (let i = 0; i<answer.length; i++) {
        if (!(dup.includes(answer[i]))) not_dup.push(answer[i])
    }
    return not_dup.join("");
}