import React from 'react'
import styles from './Posts.module.css';
import Post from './Post'
import { addPostActionCreator, changePostTextActionCreator } from '../../../redux/stock';

function Posts(props) {
  debugger
  let possElement = props.poss.map(element => <Post text={element.text} countLikes={element.countLikes} /> );
    
  let newPostElement = React.createRef();

  let addNewPost = () =>{
    props.addNewPost();
    document.getElementById('textarea_new_post').value = '';
  }

  let onPostChnge =() => {
    props.ubdateNewPostText(newPostElement);

  }

  return (
      <div className={styles.postBlock}>
        Posts
        <div>
          <textarea id = "textarea_new_post" onChange={onPostChnge} ref={newPostElement} />
        </div>
        <div>
          <button onClick={addNewPost} >Добавить</button>
        </div>
        {possElement}
      </div>
    );
}

export default Posts;