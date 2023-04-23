function solution(arr, query) {
    let e = 0;
    let s = 0;
    for (let i=0; i<query.length; i++) {
        if (i % 2 === 0) {
            e = s + query[i];
        } else {
            s += query[i];
        }
    }
    
    if (s !== e) {
        return arr.slice(s, e);
    } else {
        return [-1];
    }
    
    

}