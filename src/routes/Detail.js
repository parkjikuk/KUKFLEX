import React from 'react';
import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import MovieDetail from "../components/MovieDetail";
import Load from "../components/Load";

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
    },[id])

    useEffect(() => {
        getMoive();
    }, [getMoive]);

    return ( 
     <div>
         {loading ? <Load /> : 
        <div>
            {
                <MovieDetail
                background_image_original={movie.background_image_original}
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                rating={movie.rating}
                runtime={movie.runtime}
                description_full={movie.description_full}
                title={movie.title_long} 
                url={movie.url}
                 />     
            }
        </div>
          } 
     </div>
   )
}

export default Detail;


/*useCallback이 없다면 위 컴포넌트가 리렌더링 될때마다, 계속해서 getMovie함수를 만들게 되고, 
새로운 참조값을 받기 때문에 getMovie함수를 실행하게 됩니다.
하지만 useCallback을 정의 하면 params가 바뀔때 만 getMovie가 실행되어, 
불필요한 함수 생성 및 실행을 막을 수 있습니다. */

