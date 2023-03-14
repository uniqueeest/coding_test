function solution(i, j, k) {
    let answer = [];
    for (let n=i; n<=j; n++) {
        answer.push(n);
    }
    let array = answer.join("").split('');
    let result = 0;
    for (let i=0; i<array.length; i++) {
        if (parseInt(array[i]) === k) result += 1;
    }
    return result;
}