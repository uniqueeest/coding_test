function solution(hp) {
    let a = 0;
    let b = 0;
    let c = 0;
    
    c = Math.floor(hp / 5);
    b = Math.floor((hp % 5) / 3);
    a = Math.floor(((hp % 5) % 3) / 1)
    return a+b+c;
}