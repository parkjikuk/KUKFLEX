import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import Load from "../components/Load";
import MovieGroup from "../components/MovieGroup";
import {  useSetRecoilState } from "recoil";
import { focusNav} from "../atom/Atoms";
import styles from "./Group.module.css";

function Group() {
    const {page, group} = useParams();
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const focusPage = useSetRecoilState(focusNav);


   const getMovies = useCallback(async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/list_movies.json?page=${page}&${group}&sort_by=rating`)
        ).json();
        
        setMovies(json.data.movies);
        setLoading(false);
    }, [group, page])


    useEffect(() => {
        getMovies();
        focusPage(group);
    },[getMovies])


    return(
        <div className={styles.container}>
            {loading ? <Load /> : 
            <div className={styles.movies}>
                {movies.map((movie) => 
                <MovieGroup
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                summary={movie.summary}
                title={movie.title}
                genres={movie.genres}
                year={movie.year} />
                )}
            </div> }
        </div>
    )
}

export default Group;