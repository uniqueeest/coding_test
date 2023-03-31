function solution(a, b) {
    let answer = 1;
    for (let i=2; i<= a; i++) {
        if (a % i === 0 && b % i ===0) answer = i;
    }
    
     b /= answer;
    
    while (b % 2 === 0) b /= 2;
    while (b % 5 === 0) b /= 5;
    
    return b === 1? 1: 2;
}