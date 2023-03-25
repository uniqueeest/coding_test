function solution(A,B){
    let answer = 0;
    let result1 = A.slice().sort((a, b) => a - b);
    let result2 = B.slice().sort((a, b) => b - a);
    
    for (let i=0; i<B.length; i++) {
        answer += result1[i] * result2[i]
    }

    return answer;
}