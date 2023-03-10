function solution(array) {
    var answer = 0;
    array.sort(function(a, b)  {
  return a - b;
});
    
    for(let i=0; i<array.length; i++) {
        if (i === Math.floor(array.length / 2)) {
            answer = parseInt(array[i]);
        }
    }
    
    return answer;
}