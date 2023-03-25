function solution(n, m) {
    var answer = [];
    for (let i=n; i>=1; i--) {
        if (n % i === 0 && m % i === 0) {
            answer.push(i);
            break;
        }
    }
    for (let j=m; j<=(n*m); j++) {
        if ((n * m) % j === 0 && j % n === 0 && j % m === 0) {
            answer.push(j);
            break;
        }
    }
    
    return answer;
}