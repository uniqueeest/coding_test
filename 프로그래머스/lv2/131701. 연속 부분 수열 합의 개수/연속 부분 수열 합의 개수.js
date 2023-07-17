function solution(elements) {
    const doubleEle = [...elements, ...elements];
    
    let answer = [];
    elements.forEach((ele, idx) => {
        if (idx < elements.length) {
            for (let i=0; i<elements.length;i++) {
                const sliceArr = doubleEle.slice(i, i+1+idx);
                answer.push(sliceArr.reduce((a, b) => a + b, 0));
            }
        }
    })
    
    const answerArr = new Set(answer);
    
    return [...answerArr].length;
}