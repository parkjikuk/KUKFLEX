import { Link } from "react-router-dom";
import {useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {listPageReLoading, focusNav} from "../atom/Atoms";
import navList from "../atom/NavList";
import styles from "./Nav.module.css";
import { useEffect } from "react/cjs/react.development";


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
                <Link to={"/"} onClick={() => setFocusPath("")}>KuKFLIX</Link>
            </div>

            <div className={styles.title}>
                 {navList.map(({title, path}) => {
                   return (
                        <div>
                            <Link to={`/page/${path}/1`}
                             onClick={focusPath !== path ? optionOnClick : null}
                             style={focusPath !== path ? null : {
                            color: "#00FFFF",
                               }} 
                        >{title}</Link>
                        </div>
                   )
                 })}
            </div>
        </div>
    )
}

export default Nav;