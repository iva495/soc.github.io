import React from 'react'
import styles from './Messege.module.css';

function Messege(props) {
    return (
        <div className={styles.messege}>
            {props.messegeText}
        </div>
    );
}

export default Messege;