function solution(rsp) {
    var answer = rsp.split("");
    let result = [];
    for (let i=0; i<answer.length; i++) {
        if (parseInt(answer[i]) === 2) result.push(0);
        else if (parseInt(answer[i]) === 0) result.push(5);
        else if (parseInt(answer[i]) === 5) result.push(2);
    }
    return result.join("");
}