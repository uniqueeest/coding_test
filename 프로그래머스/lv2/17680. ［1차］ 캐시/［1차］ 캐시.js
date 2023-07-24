function solution(cacheSize, cities) {
    var answer = 0;
    let cacheMemory = [];
    const lowerCities = cities.map((a) => a.toLowerCase());
    if (cacheSize === 0) {
        return cities.length * 5;
    }
    lowerCities.forEach (city => {
        answer += cacheMemory.includes(city) ? 1 : 5;
        
        if (cacheMemory.length < cacheSize) {
            cacheMemory.push(city);
        } else {
            
            if (cacheMemory.includes(city)) {
                cacheMemory.splice(cacheMemory.indexOf(city), 1)
            } else {
                cacheMemory.shift();
            }
            cacheMemory.push(city);
        }
    })
    return answer;
}