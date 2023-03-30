function solution(dots) {
    let xList = dots.slice().sort((a, b) => a[0] - b[0]);
    let yList = dots.slice().sort((a, b) => a[1] - b[1]);
    
    let area = Math.abs(xList[3][0] - xList[0][0]) * Math.abs(yList[3][1] - yList[0][1])
    return area;
}