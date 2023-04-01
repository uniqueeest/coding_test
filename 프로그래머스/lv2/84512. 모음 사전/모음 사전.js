function solution(word) {
    let wordList = ["", 'A', 'E', 'I', 'O', 'U'];
    let newWord = [];
    for (let i=0; i<wordList.length; i++) {
        for(let j=0; j<wordList.length; j++) {
            for (let k=0; k<wordList.length; k++) {
                for (let l=0; l<wordList.length;l++) { 
                    for (let m=0; m<wordList.length; m++) {
                        let alph = "";
                        alph += `${wordList[i]}${wordList[j]}${wordList[k]}${wordList[l]}${wordList[m]}`
                        newWord.push(alph);
                    }
                }
            }
            
        } 
    }
    let data = [...new Set(newWord)].sort();
    
    
    
    return data.indexOf(word);
}