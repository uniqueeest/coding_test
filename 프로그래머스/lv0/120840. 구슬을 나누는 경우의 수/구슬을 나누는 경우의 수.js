function solution(balls, share) {
    var ballMul = 1;
    let BSMul = 1;
    let shareMul = 1;
    for (let i=1; i<= balls; i++) {
        ballMul *= i;
    }
    for (let i=1; i<=(balls - share); i++) {
        BSMul *= i;
    }
    for (let i=1; i<=share; i++) {
        shareMul *= i;
    }
    return Math.round(ballMul/(BSMul * shareMul));
}