function solution(clothes) {
    var answer = 0;
    const clothesArr = clothes.reduce((result, [_, category]) => {
    result[category] = (result[category] || 0) + 1;
    return result;
  }, {});
    const arr = [];
    for (let cloth in clothesArr) {
        arr.push(clothesArr[cloth] + 1);
    }
    
    return arr.reduce((a, b) => a * b) - 1;
}