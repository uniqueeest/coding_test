function solution(age) {
    let alphabet = ["a","b","c","d","e","f","g","h","i","j"];
    var answer = String(age).split("");
    let result = [];
    for (let i=0; i<answer.length; i++) {
        result.push(alphabet[parseInt(answer[i])]);
    }
    return result.join("");
}