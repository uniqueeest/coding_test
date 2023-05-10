function solution(num_str) {
    return num_str.split("").reduce((sum, num) => {
        return sum + Number(num);
    }, 0);
}