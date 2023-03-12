function solution(my_string) {
    var answer = my_string.split("");
    let upper = my_string.toUpperCase().split("");
    let result = [];
    for (let i=0; i<answer.length; i++) {
        if (answer[i] === upper[i]) result.push(answer[i].toLowerCase());
        else if (answer[i] !== upper[i]) result.push(answer[i].toUpperCase())
    }
    return result.join("");
}