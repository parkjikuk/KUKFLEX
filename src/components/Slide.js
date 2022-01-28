import { useEffect, useState, useCallback} from 'react';
import styles from "./Slide.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Slide({ ytsApi }) {
  const [movies, setMovies] = useState([]);
  const [trans, setTrans] = useState(0);

  // onClick : When you touch the Button, start the func. trans the slide with 460px.
  // 460px : one container is 230px, 460px -> two container
  // >= 0 : The End of the Right!
  const onClickL = () => {
    if (trans >= 0) {
      return;
    }
    setTrans(current => current + 460);
  }

  // -1380 : 230 * 6, so the button can be clicked only 3 times
  const onClickR = () => {
    if (trans <= -1380) {
      return;
    }
    setTrans(current => current - 460);
  }

  // get ytsApi from Home.js seperated by group name.
  const getMovies = useCallback(async () => {
    const json = await (
      await fetch(ytsApi)
    ).json();

    setMovies(json.data.movies);
  }, [ytsApi])

  useEffect(() => {
    getMovies();
  }, [getMovies])


  return (
    <div className={styles.container}>
      <div className={styles.slide_show}>
          <div className={styles.slides} style={{ transform: `translateX(${trans}px)` }}>
            {
              movies.map((movie) => {
                if (movie.medium_cover_image !== null)
                {
                  return (
                    (
                      <div className={styles.movie} key={movie.id}>
                      <Link to={`/movie/${movie.id}`}>
                        <img src={movie.medium_cover_image} alt={movie.title} />
                      </Link>
                      <div className={styles.letters}>
                        <div className={styles.title}>
                          <div>
                            <h3 className={styles.movieName}>
                              <Link to={`/movie/${movie.id}`}>
                                {(movie.title.length > 30)
                                  ? `${movie.title.slice(0, 30)}...`
                                  : movie.title}
                              </Link>
                            </h3>
                          </div>
                        </div>
                        <span>{movie.rating ? `rating: ${movie.rating} / 10` : null}</span>
                        <p>{movie.runtime ? `runtime: ${movie.runtime} (min)` : null}</p>
                      </div>
                    </div>
                    )
                  )
                }
              })
            }
          </div>     
      </div>     
        <div className={styles.controller}>
          <button className={styles.left} onClick={onClickL}>
            <FontAwesomeIcon icon={faCaretSquareLeft}></FontAwesomeIcon>
          </button>
          <button className={styles.right} onClick={onClickR}>
            <FontAwesomeIcon icon={faCaretSquareRight}></FontAwesomeIcon>
          </button>
        </div>
      
    </div>
  )
}

export default Slide;