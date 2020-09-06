import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import {Provider} from "react-redux"
import { BrowserRouter } from 'react-router-dom';

let renderFunction = (state) =>{
    ReactDOM.render(
    <BrowserRouter>
       <App appState={store.getState()} dispatch={store.dispatch.bind(store)} stock={store}/> 
    </BrowserRouter>,
    document.getElementById('root')
    );
}

renderFunction(store.getState());
store.subscribe(renderFunction);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
/*let renderFunction = (state) =>{
    
    ReactDOM.render(
    <BrowserRouter>
        <Provider store = {store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
    );
}

renderFunction(store.getState());
store.subscribe(renderFunction); */