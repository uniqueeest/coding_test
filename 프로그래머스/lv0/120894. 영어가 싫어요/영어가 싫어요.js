function solution(numbers) {
    let str = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    str.forEach((num, idx) => {
        numbers = numbers.split(num).join(idx)}) 
    
    return Number(numbers);
}