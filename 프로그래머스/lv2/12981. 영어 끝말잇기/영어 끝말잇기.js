function solution(n, words) {
    //중복
    const duplicate = [words[0]];
    
    //처음 빼기
    let num = 1;
    for (let i=1; i<words.length; i++) { 
        num++;
        if(words[i][0] !== words[i-1][words[i-1].length -1]) break;
        
        if (words.length === 1) break;
        
        if (duplicate.includes(words[i])) {
            break;
        } else {
            duplicate.push(words[i]);
        }
        
        if (num === words.length) return [0, 0]        
    }
    
    
    
    // 사람
    let player = 0;
    if (num % n === 0) {
        player = n;
    } else {
        player = num % n
    }
    // 차례
    let order = Math.ceil(num / n);
    

    return [player, order];
}