import profileReducer from './profilePage-reducer';
import messegeReducer from './messegePage-reducer';
import usersReducer from './users-reducer';

let stock = {
  getState() {
      return this._state;
  },
  _renderFunction(){},

  subscribe(observer){
    this._renderFunction = observer;
  },
 
  dispatch(action){

    profileReducer(this._state.profilePage, action);
    messegeReducer(this._state.messegePage, action);
    usersReducer(this._state.usersPage, action);
    this._renderFunction();
  }
}

export const followAC = (userId) =>{
  return{
    type: "FOLLOW",
    userId: userId
  }
}


export const unfollowAC = (userId) =>{
  return{
      type: "UNFOLLOW",
      userId: userId
  }
}
export const addPostActionCreator = () =>{
    return{
      type: 'ADD-POST'
    }
  }
  
export const changePostTextActionCreator = (text) =>{
    return{
        type: 'CHANGE-POST-TEXT',
        newText: text
    }
  }

  export const sendMessegeBodyActionCreator = (text) =>{ 
      return{
        type: 'SEND-MESSEGE-BODY'
      }
    }
    
  export const ubdateNewMessegeBodyActionCreator = (text) =>{
      return{
        type: 'UBDATE-NEW-MESSEGE-BODY',
        body: text
      }
    }

  export default stock;