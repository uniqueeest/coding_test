function solution(s) {
    var answer = s.split(" ")
    let sum = 0;
    for(let i=0; i<answer.length; i++) {
        if (answer[i] === "Z") sum -= parseInt(answer[i-1]);
        else sum += parseInt(answer[i]);
    }
    
    return sum;
}