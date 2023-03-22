function solution(n) {
    var answer = [];
    let i = 2;
    while (n >= i) {
        if (n % i === 0) {
            if(!(answer.includes(i))) {
                answer.push(i);
                n /= i;
            } else {
                n /= i;
            }
        } else {
            i += 1;
        }
    }
    return answer;
}