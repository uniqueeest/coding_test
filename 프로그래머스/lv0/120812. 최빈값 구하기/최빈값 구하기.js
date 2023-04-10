function solution(array) { 
    let Num = array.reduce((acc, cur) => {
        if(!acc[cur]) acc[cur] = 0
        acc[cur]++
        return acc;
    }, {});
    
    let filt = Object.keys(Num).filter((a) => {
        return Num[a] === Math.max(...Object.values(Num));
    });
    
    if (filt.length > 1) {
        return -1;
    } else {
        return parseInt(filt[0]);
    }
    
    return filt;
}