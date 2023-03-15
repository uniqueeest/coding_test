function solution(array, n) {
    array.push(n);
    let answer = array.sort((a,b) => a - b);
    let a = 0;
    let result = 0;
    for (let i=0; i<answer.length; i++) {
        if (parseInt(answer[i]) === parseInt(n)) {
            a = i;
        }
    }
    if (Math.abs(answer[a -1] - answer[a]) > Math.abs(answer[a + 1] - answer[a])) {
        result = answer[a + 1];
    } else if (Math.abs(answer[a -1] - answer[a]) < Math.abs(answer[a + 1] - answer[a])) {
        result = answer[a - 1];
    } else result = answer[a -1];
    return result;
}