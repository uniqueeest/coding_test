function solution(before, after) {
    var answer = 0;
    let before_sort = before.split("").sort();
    let after_sort = after.split("").sort();
    if (before_sort.join("") === after_sort.join("")) answer = 1;
    else answer = 0;
    
    return answer;
}