function solution(n) {
    var answer = 1;
    for (let i=1; i<=n/2; i++) {
        let sum = i;
        for (let j=i + 1; j<=n; j++) {
            if (sum !== n) {
                sum += j;
                if (sum === n) {
                    answer += 1;
                    break;
                } else if (sum > n) {
                    break;
                }
            }
        }
    }
    return answer;
}