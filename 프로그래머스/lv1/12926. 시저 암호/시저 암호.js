function solution(s, n) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var answer = "";
  for (let i = 0; i < s.length; i++) {
    let text = s[i];
    if (text == " ") {
      answer += " ";
      continue;
    }
    let Arr = upper.includes(text) ? upper : lower;
    let index = Arr.indexOf(text) + n;
    if (index >= Arr.length) index -= Arr.length;
    answer += Arr[index];
  }
  return answer;
}