function solution(n) {
    const answer = [0, 1];
    for (let i=2; i<=n+1; i++){
        const a = answer[i - 2];
        const b = answer[i - 1];
        answer.push((a + b)% 1234567);
    }
    
    return answer[n + 1];
}