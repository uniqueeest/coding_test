function solution(n) {
    var answer = 0;
    for (let i=1; i<=1000; i++) {
        if (i ** 2 === n) {
            answer = 1;
            break;
        } else {
            answer = 2;
        }
    }
    
    return answer;
}