import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, coverImg, rating, runtime, description_full, title, summary, genres}){
    return(
    <div>
        <img src={coverImg} alt={title}/>
        <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <div>
          <span>{rating ? `rating: ${rating} / 10` : null}</span>
          <p>{runtime ? `runtime: ${runtime} (min)` : null}</p>
        </div>
        {genres ? 
           <div>
             <h3>genres</h3>
             <ul>{genres.map(g => <li key={g}>{g}</li>)}</ul>
           </div> 
            : null  
      }

       {/* 영화 내용 */}
        {
          description_full ?
            <div>
              <p>{description_full}</p>
            </div>
            : null
        }
    </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

export default Movie;