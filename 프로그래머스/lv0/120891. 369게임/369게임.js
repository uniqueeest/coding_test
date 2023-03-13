function solution(order) {
    var answer = String(order).split("");
    let result = 0;
    for (let i=0; i<answer.length; i++) {
        if (parseInt(answer[i]) === 0) result += 0;
        else if (parseInt(answer[i]) % 3 === 0) result += 1; 
    }
    return result;
}