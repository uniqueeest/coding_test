function solution(num_list) {
    let sum = 0;
    let mul = 1;
    if (num_list.length >= 11) {
        for (let num of num_list) {
            sum += num;
        }
        return sum;
    } else {
        for (let num of num_list) {
            mul *= num;
        }
        return mul;
    }
}