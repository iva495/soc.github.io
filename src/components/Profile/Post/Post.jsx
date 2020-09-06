import React from 'react'
import styles from './Post.module.css';

function Post(props) {
    return (
      <div>
        <div className={styles.item}>
          <img src='https://gamespot1.cbsistatic.com/uploads/original/1578/15789366/3641663-got19.jpg' />
          {props.text}
          <br/>
          <span>збс </span> 
          {props.countLikes}
        </div>
      </div>
    );
}

export default Post;