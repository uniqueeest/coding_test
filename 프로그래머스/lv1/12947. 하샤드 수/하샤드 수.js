function solution(x) {
    let div = String(x).split("").reduce((a,b) => parseInt(a) + parseInt(b));
    return (x % div === 0);
}