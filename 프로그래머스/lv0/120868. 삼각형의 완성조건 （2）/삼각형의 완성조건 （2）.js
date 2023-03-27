function solution(sides) {
    let result = 0;
    var answer = sides.sort((a,b) => a - b);
    
    // answer[1]이 가장 큰 변일 때
    for (let i=1; i <= answer[1]; i++) {
        if (answer[0] + parseInt(i) > answer[1]) {
            result += 1;
            console.log(i);
        }
    }
    
    // result가 가장 큰 변 일 때
    for (let i=answer[1]+1; i<= (answer[0] + answer[1]); i++) {
        if (answer[0] + answer[1] > parseInt(i)) {
            result += 1;
            console.log(i);
        }
    }
    
    
    return result;
}