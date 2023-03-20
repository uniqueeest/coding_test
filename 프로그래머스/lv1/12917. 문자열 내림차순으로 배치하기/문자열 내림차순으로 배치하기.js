function solution(s) {
    var answer = s.split("").sort(function(a, b) {
  if(a < b) return 1;
  if(a > b) return -1;
  if(a === b) return 0;
});
    return answer.join("");
}