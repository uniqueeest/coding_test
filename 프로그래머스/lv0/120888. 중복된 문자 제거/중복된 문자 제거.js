function solution(my_string) {
    var answer = my_string.split("");
    let result = [];
    for (let i=0; i<answer.length; i++) {
        if (!(result.includes(answer[i]))) result.push(answer[i]);
    }
    return result.join("");
}