function solution(spell, dic) {
   
    for (let i=0; i<dic.length; i++) {
        let answer = 0;
        for (let j=0; j<spell.length; j++) {
            if (dic[i].split("").includes(spell[j])) answer += 1;
        }
        console.log(answer)
        if (answer === spell.length) {
            return 1;
        }
    }
    
    return 2;
}