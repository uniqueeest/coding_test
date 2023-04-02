function solution(s){
    
    if (s[0] !== "(") return false;
    else if (s[s.length - 1] !== ")") return false;

    let a = 0;
    
    for (let i=0; i<s.length; i++) {
        if (s[i] === "(") a++;
        else a--;
        
        if (a < 0) {
            return false;
        }
        
        if (a > s.length - i - 1) {
            return false;
        }

    }
    return true;

    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')


}