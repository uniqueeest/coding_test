function solution(n) {
    var answer = String(n).split("").sort((a,b) => b-a);
    return parseInt(answer.join(""));
}