import React from 'react'
import styles from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <div >
            <div>
                <img className={styles.content} src='https://i.trbna.com/preset/wysiwyg/2/0f/f8004bd5711ea8a9ae80e00f45cdb.jpeg' />
            </div> 
            <div>
                <img className={styles.content} src='https://i.pinimg.com/originals/04/15/a9/0415a98b9c8a363061d241929be68bfd.jpg' />
            </div>
        </div>
    );
}

export default ProfileInfo;