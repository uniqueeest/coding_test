function solution(bin1, bin2) {
    let bin1_10 = 0
    let bin2_10 = 0
    for (let i=0; i<bin1.length; i++) {
        bin1_10 += parseInt(bin1.charAt(i)) * (2 ** (bin1.length -1 -i))
    }
    for (let i=0; i<bin2.length; i++) {
        bin2_10 += parseInt(bin2.charAt(i)) * (2 ** (bin2.length -1 -i))
    }
    
    let sum = bin1_10 + bin2_10;
    
    return sum.toString(2);
}