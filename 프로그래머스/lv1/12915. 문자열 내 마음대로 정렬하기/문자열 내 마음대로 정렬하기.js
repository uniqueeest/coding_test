function solution(strings, n) {
    var answer = strings.sort((a, b) => {
        if (a > b) return 1;
        else if (a === b) return 0;
        else if (a < b) return -1;
    });
    
    let answer2 = answer.sort((a, b) => {
        if (a[n] > b[n]) return 1;
        else if (a[n] === b[n]) return 0;
        else if (a[n] < b[n]) return -1
    });
    
    return answer2;
}