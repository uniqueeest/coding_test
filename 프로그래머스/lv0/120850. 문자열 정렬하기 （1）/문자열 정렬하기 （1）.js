function solution(my_string) {
    var answer = my_string.split("");
    let result = [];
    for (let i=0; i<answer.length; i++) {
        if(parseInt(answer[i])>=0 && parseInt(answer[i])<=9){
            result.push(parseInt(answer[i]));
        }
    }
    return result.sort();
}