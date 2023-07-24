function solution(n, left, right) {
    let num = Math.floor(left / n) + 1;
    var answer = [];
    for (let i=left+1; i<=right+1; i++) {
        if (i % n === 0) num += 1;
        
        if (i % n === 0) {
            answer.push(n)
        } else if (i % n <= num) {    
            answer.push(num);
        } else {
            answer.push(i%n)
        }
        
    }
    
    return answer;
}