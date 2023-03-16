function solution(n) {
    let list = String(n).split("");
    let answer = 0;
    
    for(let i=0; i<list.length; i++) {
        answer += parseInt(list[i]);
    }
    
    return answer;
}