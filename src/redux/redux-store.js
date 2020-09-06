import {createStore, combineReducers} from 'redux';
import profileReducer from './profilePage-reducer';
import messegeReducer from './messegePage-reducer';
import usersReducer from './users-reducer';


let reducers = combineReducers({
    profilePage: profileReducer,
    messegePage: messegeReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store