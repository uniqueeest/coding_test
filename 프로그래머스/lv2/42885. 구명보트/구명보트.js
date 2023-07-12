function solution(people, limit) {
    var answer = 0;
    let sortPeople = people.sort((a, b) => b - a);
    let index = sortPeople.length;
    for (let i=0; i<sortPeople.length; i++) {
        if (index <= i) {
            break;
        }
        
        if (sortPeople[i] + sortPeople[index - 1] <= limit) {
            answer++;
            index--;
        } else {
            answer++;
        }        
    }
    

    return answer;
}