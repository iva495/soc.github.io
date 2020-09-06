import React from 'react'
import styles from './MessegesGlobal.module.css';
import Dialogs from './Dialog/DialogsContainer';
import MessegesContainer from './Messege/MessegesContainer';
function MessegesGlobal(props) {
    return (
        <div className={styles.messegesGlobal}>
            <Dialogs stock = {props.stock}/>
            <MessegesContainer stock = {props.stock}/>
        </div>  
    );
}
export default MessegesGlobal;