function solution(sizes) {
    let arr = [];
    for (let i=0; i<sizes.length; i++) {
        let arr2 = [];
        if (sizes[i][0] < sizes[i][1]) {
            arr2.push(sizes[i][1]);
            arr2.push(sizes[i][0]);
        } else {
            arr2.push(sizes[i][0]);
            arr2.push(sizes[i][1]);
        }
        arr.push(arr2);
    }
    let w = arr.slice().sort((a, b) => a[0] - b[0]);
    let h = arr.slice().sort((a, b) => a[1] - b[1]);
    
    return h[h.length -1][1] * w[w.length - 1][0];
}