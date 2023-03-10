function solution(n) {
    var answer = 0;
    for (let i=1; i<=n; i++) {
        if (i * Math.floor(n / i) === n) {
            answer += 1;
        }
    }
    return answer;
}