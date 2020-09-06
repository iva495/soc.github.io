import React from 'react'
//import styles from './Profile.module.css';
import PostsContainer from './Post/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
    return (
      <div>
        <ProfileInfo />
        <PostsContainer dispatch={props.dispatch} poss = {props.poss} newPostText={props.newPostText}/>
      </div>
    );
}

export default Profile;