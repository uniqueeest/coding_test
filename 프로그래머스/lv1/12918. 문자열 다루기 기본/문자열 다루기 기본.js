function solution(s) {
    var answer = s.split("");
    if (!(answer.length === 4 || answer.length === 6)) return false;
    
    for (let i=0; i<answer.length; i++) {
        if (!(Number.isInteger(parseInt(answer[i])))) return false;
    }
    return true;
}