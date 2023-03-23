function solution(my_string) {
    var answer = my_string.split(" ");
    let sum = 0;
    for (let i=0; i<Math.floor(my_string.length / 2); i++) {
        if (i === 0) sum += parseInt(answer[i]);
        else if (answer[i] === "+") {
            sum += parseInt(answer[i+1]);
        } else if (answer[i] === "-") {
            sum -= parseInt(answer[i+1]);
        }
    }
    return sum;
}