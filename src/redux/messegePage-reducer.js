let initialState= {
    mess : [
        {id: "1", messegeText: "piu-piu"},
        {id:"2", messegeText: "pau-pau"},
        {id:"3", messegeText: "pou-pou"},
        {id:"4", messegeText: "peu-peu"}
    ],
    newMessegeBody: "",
    dialogss : [
        {dialogNumber: "1", nameFreands: "Рэйден"},
        {dialogNumber:"2", nameFreands: "Бьяко"},
        {dialogNumber:"3", nameFreands: "Гоша-Докура"},
        {dialogNumber:"4", nameFreands: "Дзёро-Гуро"}
    ]
}

const messegeReducer = (state = initialState, action) => {

    switch(action.type){
        case 'UBDATE-NEW-MESSEGE-BODY':
            state.newMessegeBody = action.body;  
            break;
        case 'SEND-MESSEGE-BODY':
            let body = state.newMessegeBody;
            state.newMessegeBody = '';
            state.mess.push({id:"4", messegeText: body}); 
            break;
    }

    return state;
}
export default messegeReducer;