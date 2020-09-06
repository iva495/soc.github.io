import React from 'react'
import Posts from './Posts'
import { addPostActionCreator, changePostTextActionCreator } from '../../../redux/stock';

function PostsContainer(props) {
  
  let addNewPost= () => {
        let action = addPostActionCreator();
        props.dispatch(action);
        action = changePostTextActionCreator('');
        props.dispatch(action);
    }

    let onPostChnge =(newPostElement) => {
        let action = changePostTextActionCreator(newPostElement.current.value);
        props.dispatch(action);
      }
debugger
  return (
      <div>
            <Posts addNewPost={addNewPost} ubdateNewPostText={onPostChnge} poss = {props.poss}/>
      </div>
    );
}
export default PostsContainer;