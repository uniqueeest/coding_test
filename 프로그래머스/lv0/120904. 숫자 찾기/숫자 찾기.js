function solution(num, k) {
    let num_list = String(num).split("");
    var answer = 0;
    for (let i=0; i<num_list.length; i++) {
        if (parseInt(num_list[i]) === k) {
            answer = i+1;
            break;
        } else {
            answer = -1;
        }
    }

    return answer;
}