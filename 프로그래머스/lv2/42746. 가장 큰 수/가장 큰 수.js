function solution(numbers) {
    const sortNum = numbers.sort((a, b) => {
        const str1 = String(a);
        const str2 = String(b);
        
        if (str1 + str2 > str2 + str1) return -1;
        else if (str1 + str2 === str2 + str1) return 0;
        else if (str2 + str1 > str1 + str1) return 1;
    })
    
    if (sortNum[0] === 0) return "0";
    
    return sortNum.join("");
}