import React from 'react'
import styles from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

function Dialog(props) {
    return (
        <div className={styles.dialog}>
            <NavLink to={"/messeges/" + props.dialogNumber} activeClassName={styles.activeLink}>{props.nameFreands} </NavLink>
        </div>
    );
}

export default Dialog;