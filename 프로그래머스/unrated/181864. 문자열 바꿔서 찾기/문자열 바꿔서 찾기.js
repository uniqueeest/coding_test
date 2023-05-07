function solution(myString, pat) {
    let answer = [];
    for (let i=0; i<myString.length; i++) {
        if (myString[i] === "A") {
            answer.push("B");
        } else {
            answer.push("A");
        }
    }
    answer = answer.join("");
    
    if (answer.includes(pat)) return 1;
    else return 0;
}