function solution(n) {
    var answer = 0;
    for (let i=1; i<=n; i++) {
        let result = 0;
        for (let j=1; j<=i; j++) {
            if (i % j === 0) result += 1;
        }
        if (result >= 3) answer +=1;
    }
    return answer;
}