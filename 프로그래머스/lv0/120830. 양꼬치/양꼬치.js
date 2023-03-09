function solution(n, k) {
    var answer = 0;
    var free = Math.floor(n / 10);
    
    answer = 12000 * n + 2000 * k - 2000 * free;
    return answer;
}