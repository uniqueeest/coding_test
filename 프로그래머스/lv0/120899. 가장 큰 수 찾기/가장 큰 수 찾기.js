function solution(array) {
    let max = [Math.max(...array)];
    for(let i=0; i<array.length; i++) {
        if (max[0] === array[i]) {
            max.push(i);
        }
    }
    return max;
}