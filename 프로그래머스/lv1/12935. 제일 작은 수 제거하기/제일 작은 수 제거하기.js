function solution(arr) {
    let answer = [];
    if (arr.length === 1) return [-1];
    else {
        let min = Math.min.apply(Math, arr);
        for (let i=0; i<arr.length; i++) {
            if (arr[i] !== min) answer.push(arr[i]);
        }
    };
    return answer;
}