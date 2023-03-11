function solution(my_string) {
    var answer = 0;
    let number = [];
    for(let i=0; i<my_string.length; i++) {
        if(parseInt(my_string[i]) > 0 && parseInt(my_string[i]) < 10) {
            number.push(parseInt(my_string[i]));
        }
    }
    for (let i=0; i<number.length; i++) {
        answer += number[i];
    }
    return answer;
}