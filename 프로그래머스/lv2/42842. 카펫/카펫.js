function solution(brown, yellow) {
    var answer = [];
    const measure = [];
    const allPiece = brown + yellow;
    for (let i=1; i<=allPiece / 2; i++) {
        if (allPiece % i === 0) {
            if (!measure.includes(i)) {
                measure.push(i);
                measure.push(allPiece / i);
            }
        }
    }
    for (let i=0; i<measure.length; i++) {
        if (i % 2 !== 0) continue;
        
        if ((2 * ((measure[i] ) + measure[i + 1] - 2)) === brown) {
            answer.push(measure[i+1]);
            answer.push(measure[i]);
            break;
        }
    }
   return answer;
}