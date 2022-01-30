import { useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import Load from "../components/Load";
import MovieGroup from "../components/MovieGroup";
import { useSetRecoilState, useRecoilState } from "recoil";
import { listPageReLoading, focusNav } from "../atom/Atoms";
import styles from "./Group.module.css";

const pageNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Group() {
    const {page, group} = useParams();
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [reloading, setReloading] = useRecoilState(listPageReLoading);
    const focusPage = useSetRecoilState(focusNav);


   const getMovies = useCallback(async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/list_movies.json?page=${page}&${group}&sort_by=rating`)
        ).json();
        
        setMovies(json.data.movies);
        setLoading(false);
        console.log(movies);
    }, [group, page])


    useEffect(() => {
        getMovies();
        focusPage(group);
        setLoading(true);
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
            </div>}
        <ul className={styles.pagination}>
            {loading ? null : pageNums.map(pageNum => {
                return (
                    <li key={pageNum}>
                        <Link 
                        to={`/page/${group}/${pageNum}`}
                        onClick={() => setReloading(true)}
                        className={pageNum == page ? styles.focusing : null }
                        >{pageNum}</Link>
                    </li>
                )
            })}
        </ul>
        </div>
    )
}

export default Group;