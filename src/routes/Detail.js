import { useCallback } from "react";
import { useParams } from "react-router";
import { useEffect } from "react/cjs/react.development";

function Detail() {
    const {id} = useParams();
    console.log(id);
    
    const getMoive = useCallback(async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))
            .json();
            console.log(json);
    },[id])

    useEffect(() => {
        getMoive();
    }, [getMoive]);

    return <h1>Detail</h1>
}

export default Detail;


/*useCallback이 없다면 위 컴포넌트가 리렌더링 될때마다, 계속해서 getInitNoti함수를 만들게 되고, 
새로운 참조값을 받기 때문에 getInitNoti함수를 실행하게 됩니다.
하지만 useCallback을 정의 하면 params가 바뀔때 만 getInitNoti가 실행되어, 
불필요한 함수 생성 및 실행을 막을 수 있습니다. */

