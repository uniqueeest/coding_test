function solution(s) {
    var answer = s.toLowerCase().split(" ");
    let answer2 = [];
    for (let i=0; i<answer.length; i++) {
        let word = [];
        for (let j=0; j<answer[i].length; j++) {
            if (j % 2 === 0) word.push(answer[i][j].toUpperCase());
            else word.push(answer[i][j]);
        }
        answer2.push(word.join(""));
        console.log(answer2.join(" "))
    }

    return answer2.join(" ");
}