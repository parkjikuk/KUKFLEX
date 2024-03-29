import React from 'react';
import PropTypes from "prop-types";
import styles from "./MovieDetail.module.css";

function MovieDetail({ background_image_original, coverImg, rating, runtime, description_full, title, url }) {
  return (
    <div className={styles.movie}>
      <div className={styles.background}>
        <img className={styles.Detail_bg} src={background_image_original} alt=""/>
      </div>
      <div className={styles.show}>
        <div className={styles.shortView}>
          <div className={styles.shortView_Img}>
            <img src={coverImg} alt={title} />
          </div>
          <div className={styles.shortView_letters}>
            <h3>
              {title}
            </h3>
            <p>{rating ? `rating: ${rating} / 10` : null}</p>
            <p>{runtime ? `runtime: ${runtime} (min)` : null}</p> 
            <h3 className={styles.movie_url}><a href={url} target="_blank" rel="noopener noreferrer">SEE THE MOVIE</a></h3>          
          </div>
        </div>
        {description_full ?
            <div className={styles.descript}>
              <p>{description_full}</p>
            </div> 
            : null}
      </div>
    </div>
  )
}

MovieDetail.prototypes = {
  background_image_original: PropTypes.string.isRequired,
  rating: PropTypes.number,
  runtime: PropTypes.number,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description_full: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default MovieDetail;