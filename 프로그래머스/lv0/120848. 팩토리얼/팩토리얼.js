function solution(n) {
    var answer = 0;
    let fac = 1;
    while (n >= fac) {
        answer += 1;
        fac *= answer;
    }
    return answer -1;
}