function solution(n) {
    var answer = String(n).split("");
    let result = [];
    for(let i=answer.length; i>=0; i--) {
        if(parseInt(answer[i])>=0) result.push(parseInt(answer[i]));
    }
    return result;
}