function solution(left, right) {
    var answer = 0;
    for (let i=left; i<=right; i++) {
        let result = [];
        for (let j=1; j<=i; j++) {
            if(i % j === 0) result.push(i);
        }
        if (result.length % 2 === 0 ) answer += result[result.length - 1];
        else answer -= result[result.length - 1];
    }
    return answer;
}