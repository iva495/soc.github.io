import React from 'react'
import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className={styles.nav}> 
        <div className= {`${styles.item} ${styles.active}`}>
            <NavLink to="/profile" activeClassName={styles.activeLink}>Profile</NavLink>
        </div><div className={styles.item}>
           <NavLink to="/messeges" activeClassName={styles.activeLink}>Messeges</NavLink>
        </div><div className={styles.item}>
        <NavLink to="/users" activeClassName={styles.activeLink}>Users</NavLink>
        </div><div className={styles.item}>
            <a>Audio</a>
        </div><div className={styles.item}>
            <a>Video</a>
        </div>
        <div>
            Setings
        </div>
      </nav>
    );
}

export default Nav;