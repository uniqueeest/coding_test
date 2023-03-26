function solution(new_id) {
    let answer = new_id
                    .toLowerCase()
                    .replace(/[^\.a-z0-9-_]/g, "") // 2단계
                    .replace(/\.+/g, ".") // 3단계
                    .replace(/^\.|\.$/, "") // 4단계
    
    if (answer.length === 0) answer = "a"; // 5단계
    
    answer = answer.slice(0, 15).replace(/\.+$/, ""); // 6단계
    
    while (answer.length < 3) {
        answer += answer[answer.length - 1];
    }
    
    
    return answer;
}