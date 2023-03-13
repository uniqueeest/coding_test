function solution(my_string) {
    let lower_string = my_string.toLowerCase();
    let lower_list =lower_string.split("").sort();
    return lower_list.join("");
}