import { Link } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import {listPageReLoading, focusNav} from "../atom/Atoms";
import navList from "../atom/NavList";
import styles from "./Nav.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


function Nav(){
    // const [search, setSearch] = useState(null);
    const pageReLoading = useSetRecoilState(listPageReLoading);
    const [focusPath, setFocusPath] = useRecoilState(focusNav);


    // const onClick = (event) => {
    //     setSearch(event.target.value)
    // }

    const optionOnClick = () => {
        pageReLoading(true);
        console.log(focusPath);
    }
    
    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                <Link to={"/"} onClick={() => setFocusPath("")}>KUKFLEX</Link>
            </div>

            <div className={styles.title}>
                 {navList.map(({title, path}) => {
                   return (
                        <div className={styles.movie_title} key={title}>
                            <Link to={`/page/${path}/1`}
                             onClick={focusPath !== path ? optionOnClick : null}
                             style={focusPath !== path ? null : {
                             color: "#00FFFF",
                               }} 
                        >{title}</Link>
                        </div>                                   
                   )
                 })}
                 <button className={styles.menu}>
                    <FontAwesomeIcon icon={faBars} size="2x"></FontAwesomeIcon>
                 </button>
            </div>
        </div>
    )
}

export default Nav;