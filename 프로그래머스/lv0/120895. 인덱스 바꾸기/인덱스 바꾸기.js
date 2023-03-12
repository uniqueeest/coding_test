function solution(my_string, num1, num2) {
    var answer = my_string.split("");
    let result = [];
    for (let i=0; i<answer.length; i++) {
        if (i === num1) result.push(answer[num2]);
        else if (i === num2) result.push(answer[num1]);
        else result.push(answer[i]);
    }
    return result.join("");
}