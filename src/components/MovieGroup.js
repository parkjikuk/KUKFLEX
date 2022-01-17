import { Link } from "react-router-dom";
import styles from "./MovieGroup.module.css";

function MovieGroup({id, coverImg, genres, summary, title,  year}) {
    return (
        <div className={styles.movie} >        
           <img src={coverImg} className={styles.movie_img} alt={title}/>
           <div>
              <h2 className={styles.movie_title}>
                  <Link to={`/movie/${id}`}>
                      {(title.length > 35)
                      ? `${title.slice(0,35)}` :
                      title
                      }
                  </Link>
              </h2>
              <h3 className={styles.movie_year}>{year}</h3>
              <p className={styles.movie_summary}>{summary ? (summary.length > 180 ? `${summary.slice(0, 180)}...` : summary) : null}</p>
              <ul className={styles.movie_genres}>
                  {genres.map((g) => 
                  <li key={g}>{g}</li>
                  )}
              </ul>
             </div>
        </div>
      
    )
}

export default MovieGroup;