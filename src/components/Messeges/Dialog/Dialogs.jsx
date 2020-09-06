import React from 'react'
import styles from './Dialogs.module.css';
import Dialog from './Dialog'

function Dialogs(proms) {
 debugger
let dialogElements = proms.state.dialogss.map(element => <Dialog  dialogNumber={element.dialogNumber} nameFreands={element.nameFreands}/>);
  
return (
        <div className={styles.dialogs}>
            {dialogElements}
        </div>
    );
}

export default Dialogs;
