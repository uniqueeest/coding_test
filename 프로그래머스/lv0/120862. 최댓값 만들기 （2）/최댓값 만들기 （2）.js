function solution(numbers) {
    let num_list = numbers.sort((a, b) => a - b)
    let num_len = num_list.length;
    let answer = 0;
    if (num_list[num_len - 1] * num_list[num_len -2] < num_list[0] * num_list[1]) {
        answer = num_list[0] * num_list[1];
    } else {
        answer = num_list[num_len - 1] * num_list[num_len -2]
    }
    return answer;
}