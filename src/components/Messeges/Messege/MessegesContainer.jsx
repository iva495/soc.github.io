import React from 'react'
import Messeges from './Messeges';
import { ubdateNewMessegeBodyActionCreator, sendMessegeBodyActionCreator } from '../../../redux/stock';
//import { connect } from 'react-redux';
function MessegesContainer(props) {
    let state = props.stock.getState().messegePage;

    //let messElements = state.mess.map(element =>  <Messege  messegeText={element.messegeText} id={element.id} />);
    let textareaMess = document.getElementById("textareaMess");
    
    let onSendMessageClick = () => {
        props.stock.dispatch(sendMessegeBodyActionCreator());
        textareaMess.value = '';
    }
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.stock.dispatch(ubdateNewMessegeBodyActionCreator(body));
    }
    return (
        <div>
            <Messeges state={props.stock.getState().messegePage} onSendMessageClick={onSendMessageClick} onNewMessageChange={onNewMessageChange}/>
        </div>  
    );
}

/*let mapStateToProps = (state) => {
    return{
        state: state.messegePage
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        onSendMessageClick: () =>{
            dispatch(sendMessegeBodyActionCreator());
        },
        onNewMessageChange:(event) => {
            let body = event.target.value;
            dispatch(ubdateNewMessegeBodyActionCreator(body));
        }
    }
}

const MessegesContainer = connect(mapStateToProps,mapDispatchToProps )(Messeges)*/

export default MessegesContainer;