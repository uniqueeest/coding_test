function solution(s){
    let p_case = s.toLowerCase().split("").filter(alph => alph === "p").reduce(((a, b)=> a + 1),0);
    let y_case = s.toLowerCase().split("").filter(alph => alph === "y").reduce(((a, b)=> a + 1),0);
    
    if (p_case === y_case) return true;
    else return false;

}