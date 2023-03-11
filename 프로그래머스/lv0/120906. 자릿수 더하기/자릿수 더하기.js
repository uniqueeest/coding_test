function solution(n) {
    var answer = 0;
    let split_n = String(n).split("");
    for (let i=0; i<split_n.length; i++) {
        answer += parseInt(split_n[i]);
    }
    return answer;
}