function solution(my_string) {
    let sum = 0;
    let answer = my_string.toLowerCase().replace(/[a-z]/g,",").split(",")
    for (let i=0; i<answer.length; i++) {
        if (Number.isInteger(parseInt(answer[i]))) sum += parseInt(answer[i]);
    }
    return sum;
}