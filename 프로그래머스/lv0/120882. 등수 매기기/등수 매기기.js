function solution(score) {
    var answer = [];
    let ranking = 1;
    for (let i=0; i<score.length; i++) {
        for (let j=0; j<score.length; j++) {
            if (score[i][0] + score[i][1] < score[j][0] + score[j][1]) ranking++;
            else if(score[i][0] + score[i][1] === score[j][0] + score[j][1]) continue;
        }
        answer.push(ranking);
        ranking = 1;
    }
    return answer;
}