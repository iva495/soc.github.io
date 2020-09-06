import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Navbar/Nav'
import Profile from './components/Profile/Profile'
import Messeges from './components/Messeges/MessegesGlobal'
import UsersContainer from "./components/Users/UsersContainer"
import { Route, BrowserRouter } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-soc-set'>
        <Header />
        <Nav />
        <div className="app-soc-set_content">
          <Route path='/profile' render={() => <Profile dispatch={props.dispatch} poss = {props.appState.profilePage.poss} newPostText = {props.appState.profilePage.newPostText}/>} />
          <Route path='/messeges' render={() => <Messeges stock = {props.stock} dialogss = {props.appState.messegePage.dialogss}/>}/>
          <Route path='/users' render={() => <UsersContainer stock = {props.stock} userss = {props.appState.usersPage.userss}/>} />
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;