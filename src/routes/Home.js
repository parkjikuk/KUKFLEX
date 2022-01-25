import {Link} from "react-router-dom";
import styles from "./Home.module.css";
import Slide from "../components/Slide";
import navList from "../atom/NavList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faVideo} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useCallback} from 'react';
import Load from '../components/Load';

function Home() {
  const [loading, setLoading] = useState(true);

  const getMovies = useCallback(async () => {
     await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?limit=10`)
    ).json();

    setLoading(false);
  }, [])

  useEffect(() => {
    setLoading(true);
    getMovies();
  }, [])

  return (
      <div className={styles.container}>
        {loading ? <Load /> : navList.map(slide => {
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