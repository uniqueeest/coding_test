function solution(my_string, letter) {
    var answer = '';
    for (i in my_string) {
        if (my_string[i] !== letter) {
            answer += my_string[i];
        }
    }
    return answer;
}