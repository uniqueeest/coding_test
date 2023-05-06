function solution(num_list) {
    const sum = num_list.reduce((a, b) =>{
        return a + b;
    })
    
    const mul = num_list.reduce((a, b) => {
        return a * b;
    })
    
    if (sum ** 2 > mul) return 1;
    else return 0;
}