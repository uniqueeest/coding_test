function solution(s) {
    var answer = s.split(" ").sort((a, b) => parseInt(a) - parseInt(b));
    
    return [answer[0], answer[answer.length-1]].join(" ");
}