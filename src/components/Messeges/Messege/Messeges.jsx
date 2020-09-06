import React from 'react'
import styles from './Messeges.module.css';
import Messege from './Messege';

function Messeges(props) {

    let messElements = props.state.mess.map(element =>  <Messege  messegeText={element.messegeText} id={element.id} />);
    
    let onSendMessageClick = () => {
        props.onSendMessageClick();
    }
    let onNewMessageChange = (event) => {
        props.onNewMessageChange(event)
    }
    return (
        <div className={styles.messeges}>
            <div>{messElements}</div>
            <div>
                <div><textarea id = "textareaMess"
                    onChange={onNewMessageChange}
                    placeholder="отправь сообщение"></textarea></div>
                <div><button onClick={onSendMessageClick}>Бамс</button></div>
            </div>
        </div>  
    );
}

export default Messeges;