function solution(s) {
    var answer = s
    .replace(/\b[a-z]/g, (v) => {
        return v.toUpperCase();
    })
    .replace(/\B[A-Z]/g, (v) => {
        return v.toLowerCase();
    })
    
    return answer;
}