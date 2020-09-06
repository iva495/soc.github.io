import React from 'react'
import Users from "./Users"
import { unfollowAC, followAC, setUsers} from '../../redux/stock';


function UsersContainer(props) {
    
    let state = props.stock.getState().usersPage.userss;
    
    let follow = (UserId) => {
       props.stock.dispatch(followAC(UserId));
       
    }

    let unfollow = (UserId) => {
      props.stock.dispatch(unfollowAC(UserId));
    }   


    return (
        <div>
            <Users users={state} follow={follow} unfollow={unfollow}/>
        </div>  
    );
}

export default UsersContainer;
