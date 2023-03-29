function solution(numer1, denom1, numer2, denom2) {
    var answer1 = numer1 * denom2 + numer2 * denom1;
    let answer2 = denom1 * denom2;
    
    for (let i=2; i<1000;) {
        if (answer1 % i === 0 && answer2 % i === 0) {
            answer1 /= i;
            answer2 /= i;
            
        } else {
            i++;
        }
    }
    
    return [answer1, answer2];
    
}