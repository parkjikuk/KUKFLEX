import React from 'react';
import { Link } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import {listPageReLoading, focusNav} from "../atom/Atoms";
import navList from "../atom/NavList";
import styles from "./Nav.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";


function Nav(){
    // const [search, setSearch] = useState(null);
    const pageReLoading = useSetRecoilState(listPageReLoading);
    const [focusPath, setFocusPath] = useRecoilState(focusNav);
    const [menuOpen, setMenuOpen] = useState(false);


    // const onClick = (event) => {
    //     setSearch(event.target.value)
    // }

    const optionOnClick = () => {
        pageReLoading(true);
        setMenuOpen(false);
        console.log(focusPath);
    }

    const menuClick = () => {
        setMenuOpen (menuOpen => !menuOpen);
        console.log(menuOpen);
    }
    
    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                <Link to={"/"} onClick={() => setFocusPath("")}>KUKFLEX</Link>
            </div>

            <div className={styles.title}>
              <ul className={styles.movie_title}>
                 {navList.map(({title, path}) => {
                   return (
                        <li key={title}>
                            <Link to={`/page/${path}/1`}
                             onClick={focusPath !== path ? optionOnClick : null}
                             style={focusPath !== path ? null : {
                             color: "#00FFFF",
                               }} 
                        >{title}</Link>
                        </li>                                   
                   )
                 })}
              </ul>


               <div className={styles.menu}>
                 <button className={styles.menuIcon} onClick={()=>menuClick()}>
                    <FontAwesomeIcon icon={faBars} size="2x"></FontAwesomeIcon>
                 </button>
                  <ul className={menuOpen ? `${styles.openMenu}` : `${styles.closeMenu}`}>
                   {navList.map(({title, path}) => {
                     return (
                          <li className={styles.menuItem} key={title}>
                              <Link to={`/page/${path}/1`}
                               onClick={focusPath !== path ? optionOnClick : null}                   
                               style={focusPath !== path ? null : {
                               color: "#00FFFF",
                                 }} 
                          >{title}</Link>
                          </li>                                   
                     )
                   })}
                   </ul>           
               </div>
            </div>
        </div>
    )
}

export default Nav;