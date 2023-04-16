function solution(t, p) {
    let Num = [];
    const tLen = t.length;
    const pLen = p.length;
    
    for (let i=0; i<=tLen - pLen; i++) {
        Num.push(t.slice(i, i+ pLen));
    }
    
    let answer = 0;
    for (let i=0; i<Num.length; i++) {
        if (parseInt(Num[i]) <= parseInt(p)) answer++;
    }
    
    return answer;
}