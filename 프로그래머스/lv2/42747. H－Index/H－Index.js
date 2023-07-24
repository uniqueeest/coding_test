function solution(citations) {
    var answer = 0;
    const citNum = citations.sort((a, b) => b - a);
    for (let i=0; i<citNum.length; i++) {
        if (citNum[i] === 0) {
            break;
        } 
        answer++;
        if (citNum[i] >= answer && citNum[i+1] <= answer) {
            break;
        }
    } 
    return answer;
}