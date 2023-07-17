function solution(k, tangerine) {
   const tanNum = tangerine.reduce((a, k) => {
    if (!a[k]) {
        a[k] = 0;
    }
    a[k]++;
    return a;
}, [0]);
    const tanArr = tanNum.sort((a, b) => b - a);
    let answer = 0;
    for (let i = 0; i<tanArr.length; i++) {
        if (k <= 0) {
            break;
        } 
            answer++;
            k = k - tanNum[i];
            
        
    }
    return answer;
}