function solution(sides) {
    let result = 0;
    var answer = sides.sort();
    if (answer[0] + answer[1] > answer[2]) result = 1;
    else result = 2;
    return result;
}