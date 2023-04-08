function solution(n, arr1, arr2) {
    var sec1 = [];
    var sec2 = [];
    // 보물지도 1
    for (let i=0; i<arr1.length; i++) {
        const A = arr1[i].toString(2).split(""); 
        while (A.length <= n -1) {
            A.unshift("0");
        }
        sec1.push(A);
    }
    // 보물지도 2
    for (let i=0; i<arr2.length; i++) {
        const B = arr2[i].toString(2).split(""); 
        while (B.length <= n -1) {
            B.unshift("0");
        }
        sec2.push(B);
    }
    console.log(sec1)
    console.log(sec2)
    // 합치기
    const result = [];    
    for (let i=0; i<n; i++) {
        let answer = "";
        for (let j=0; j<n; j++) {
            
            if (sec1[i][j] === "1" || sec2[i][j] === "1") {
                answer += "#";
            } else {
                answer += " ";
            }
            
        }
        result.push(answer);
    }
    
    return result;
}