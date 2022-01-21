import {Link} from "react-router-dom";
import styles from "./Home.module.css";
import Slide from "../components/Slide";
import navList from "../atom/NavList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faVideo} from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
      <div className={styles.container}>
        {navList.map(slide => {
          return (
            <div className={styles.slideBox} key={slide.title}>
                <div className={styles.slideTitle}>
                  <Link to={`/page/${slide.path}/1`}>
                    <div className={styles.titleIcon}>
                      <FontAwesomeIcon  icon={faVideo} />
                    </div>
                    <div>
                      <span>{slide.title}</span>
                    </div>
                  </Link>
                </div>
                <Slide  ytsApi={`https://yts.mx/api/v2/list_movies.json?limit=10&${slide.path}&sort_by=year`} />
            </div>
          )
        })}
        
      </div>
  )
}

export default Home;