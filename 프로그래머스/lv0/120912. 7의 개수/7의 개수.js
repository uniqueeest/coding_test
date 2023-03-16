function solution(array) {
    let a = String(array).split("");
    let answer = 0;
    
    for(let i=0; i<a.length; i++) {
        if (parseInt(a[i]) === 7) answer += 1;
    }
    
   
   return answer;
}