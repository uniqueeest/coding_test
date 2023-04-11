function solution(n) {
    const Num = n.toString(2).replace(/0/g, "").length;
    for (let i=n+1; i<=1000000; i++) {
        let Num2 = i.toString(2).replace(/0/g, "").length;
        if (Num === Num2) return i;
    }
}