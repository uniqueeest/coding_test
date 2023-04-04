function solution(s) {
    let zeroCount = 0;
    let count = 0;
    while (s.length > 1) {
        count += 1;
        let div = 0;
        let answer = s.split("").filter(x => {
            if(x === "0") {
                zeroCount += 1;
            } else {
                div++;
            }
        });
        s = div.toString(2);
    }
    
    return [count, zeroCount];
}