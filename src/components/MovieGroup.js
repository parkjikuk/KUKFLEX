import { Link } from "react-router-dom";
import styles from "./MovieGroup.module.css";

function MovieGroup({id, coverImg, genres, summary, title,  year}) {
    return (
        <Link to={`/movie/${id}`}>
          <div className={styles.movie} >        
          <img src={coverImg} className={styles.movie_img} alt={title}/>
            <div>
              <h2 className={styles.movie_title}>            
                      {(title.length > 35)
                      ? `${title.slice(0,35)}` :
                      title
                      }   
              </h2>
              <div className={styles.movie_info}>
                <h3 className={styles.movie_year}>{year}</h3>
                <p className={styles.movie_summary}>{summary ? (summary.length > 180 ? `${summary.slice(0, 180)}...` : summary) : null}</p>
                <ul className={styles.movie_genres}>
                    {genres.map((g) => 
                    <li key={g}>{g}</li>
                    )}
                </ul>
              </div>
             </div>
          </div>
         </Link>  
    )
}

export default MovieGroup;