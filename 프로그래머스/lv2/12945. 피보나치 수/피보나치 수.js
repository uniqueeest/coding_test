function solution(n) {
    var a = 0;
    var b = 1;
    var c = 0;
    for (let i=2; i<=n; i++) {
        c = (a + b) % 1234567
        
        a = b % 1234567
        b = c
    }
    
    return c;
}