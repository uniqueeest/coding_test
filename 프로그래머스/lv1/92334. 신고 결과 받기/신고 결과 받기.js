function solution(id_list, report, k) {
    // 중복 제거
    let reports = [...new Set(report)].map(a => {
        return a.split(" ");
    });
    
    // userList
    const userList = id_list.reduce((list, id) => {
        list[id] = [0, []];
        return list;
    }, {});
    console.log(userList)
    
    
    for (let id of reports) {
        const [reportID, ID] = id;
        userList[reportID][1].push(ID); //신고한 유저
        userList[ID][0]++               //신고된 횟수
        
    }

    
    //K이상 신고횟수
    const stop = id_list.filter((a) => userList[a][0] >= k);
    console.log(stop);
    const newMap = id_list.map((a) => {
        return userList[a][1].filter((a) => {
            return stop.includes(a);
        }).length;
    })
    
    return newMap;
}