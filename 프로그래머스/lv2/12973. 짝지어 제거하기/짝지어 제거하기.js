function solution(s)
{
    var answer = [];

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    
    for (let i=0; i<s.length; i++) {
        answer.push(s[i]);
        if (answer[answer.length - 1] === answer[answer.length - 2]) {
            answer.pop();
            answer.pop();            
        }
    }
    
    if (answer.length === 0) return 1;
    else return 0;
    
}