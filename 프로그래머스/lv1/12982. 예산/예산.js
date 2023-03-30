function solution(d, budget) {
    var answer = 0;
    let dList = d.sort((a, b) => a - b);
    for (let i=0; i<dList.length; i++) {
        if (dList[i] <= budget) {
            budget -= dList[i];
            answer += 1;
        } else {
            break;
        }
    }
    return answer;
}