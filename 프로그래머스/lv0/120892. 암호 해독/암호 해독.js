function solution(cipher, code) {
    var answer = cipher.split("");
    let result = [];
    for (let i=0; i<=answer.length; i++) {
        if(i%code === 0) {
            result.push(answer[i-1]);
        }
    }
    return result.join("");
}