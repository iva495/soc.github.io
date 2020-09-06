import React from 'react'
import Dialogs from './Dialogs';

function DialogsContainer(props) {
    return (
        <div>
            <Dialogs state={props.stock.getState().messegePage} />
        </div>  
    );
}

export default DialogsContainer;