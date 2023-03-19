function solution(phone_number) {
    var answer = '';
    let answer2 = "";
    for (let i=0; i<phone_number.length -4; i++) {
        answer += "*";
    }
    for (let i=phone_number.length-1; i>phone_number.length -5; i--) {
        answer2 += phone_number[i];
    }
    
    
    return answer + answer2.split("").reverse().join("");
}