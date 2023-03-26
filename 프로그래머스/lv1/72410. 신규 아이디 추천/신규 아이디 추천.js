function solution(new_id) {
    let answer = new_id.toLocaleLowerCase() // 1단계
                        .replace(/[^\.a-z0-9-_]/g, '') // 2단계
                        .replace(/\.+/g, '.') // 3단계
                        .replace(/^\.|\.+$/, ''); // 4단계


    if (answer == "") answer = 'a'; // 5단계

    answer = answer.slice(0, 15).replace(/\.+$/, ''); // 6단계

    return answer.length > 2
        ? answer
        : answer.padEnd(3, answer[answer.length - 1]);
}