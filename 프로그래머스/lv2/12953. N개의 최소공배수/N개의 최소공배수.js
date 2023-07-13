function solution(arr) {
    var answer = 0;
    
    //최대 공약수
    const gcd = (a, b) => {
        if (b === 0) return a;
        return gcd(b, a % b);
    };
    
   // 최소 공배수
    const lcm = (a, b) => {
        return a * b / gcd(a, b);
    }
    
    while (arr.length >= 2) {
        const a = arr.pop();
        const b = arr.pop();
        arr.push(lcm(a, b));
    }
    return arr[0];
}