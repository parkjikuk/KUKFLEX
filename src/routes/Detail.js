import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    
    const getMoive = useCallback(async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))
            .json();

            setMovie(json.data.movie);
            setLoading(false);
            console.log(json)

    },[id])

    useEffect(() => {
        getMoive();
    }, [getMoive]);

    return ( 
     <div>
         {loading ? <h1>Loading...</h1> : 
         <>
          <img src={movie.large_cover_image} alt={movie.title}/> 
          <h1>{movie.title}</h1>
          <h2>{`year: ${movie.year}`}</h2>
          <h2>{`rating: ${movie.rating}`}</h2>
          <p>{movie.description_full}</p>
         </>
          } 
     </div>
   )
}

export default Detail;


/*useCallback이 없다면 위 컴포넌트가 리렌더링 될때마다, 계속해서 getInitNoti함수를 만들게 되고, 
새로운 참조값을 받기 때문에 getInitNoti함수를 실행하게 됩니다.
하지만 useCallback을 정의 하면 params가 바뀔때 만 getInitNoti가 실행되어, 
불필요한 함수 생성 및 실행을 막을 수 있습니다. */

