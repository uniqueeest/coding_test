function solution(arr, flag) {
    var answer = [];
    for (let i=0; i<arr.length; i++) {
        if (flag[i]) {
            for (let j=0; j<arr[i] * 2; j++) {
                answer.push(arr[i]);
            }
        } else {
            answer = answer.slice(0, -arr[i]);
        }
    }
    return answer;
}