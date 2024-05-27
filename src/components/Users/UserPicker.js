import { useState, useEffect } from "react";
import Spinner from "../UI/Spinner";

function UserPicker() {
    const [users, setUsers] = useState(null);
    
    useEffect(() => {
        fetch("http://localhost:3001/users")
        .then(resp => resp.json())  // 반환된 json 문자열을 자바스크립트 객체로 변환
        .then(data => setUsers(data)); // 적재한 사용자로 상태 갱신
    }, []); // 빈 의존 관계 배열을 포함시켜서 컴포넌트가 처음 마운트될 때 데이터를 한 번만 적재하게 만듦
    
    if(users === null) {
        return <Spinner />
    }
    
    return(
        <select>
            {users.map(u => (
                <option key={u.id}>{u.name}</option>
            ))}
        </select>
    );
}

export default UserPicker;