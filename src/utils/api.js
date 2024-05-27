function getData(url) {
    
    return fetch(url)
    .then(resp => {
        
        if(!resp.ok) { // 응답에 문제가 있는지 검사
            throw Error("There was a problem fetching data.");
        }
        
       return resp.json(); // 응답으로 받은 JSON 문자열을 자바스크립트 객체로 변환 
    });
}

export default getData;