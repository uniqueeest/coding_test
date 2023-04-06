function solution(numlist, n) {
    var answer = [];
    for (let i=0; i<numlist.length; i++) {
        let answer2 = [];
        answer2.push(Math.abs(numlist[i] - n));
        answer2.push(numlist[i]);
        answer.push(answer2);
    }
    answer.sort((a, b) => a[0] - b[0]|| b[1] - a[1])
    let answer3 = [];
    for (let i=0; i<answer.length; i++) {
        answer3.push(answer[i][1])
    }
    return answer3;
}