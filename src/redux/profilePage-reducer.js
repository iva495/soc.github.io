let initialState= {
    poss : [
        {id:"1", text:"Я хочу боксмастер, шефбургер и стрипсы из KFC с маноговым лимонаиком", countLikes:'584'},
        {id:"2", text:"Я тож", countLikes:4},
        {id:"3", text:"", countLikes: "0"},
        {id:"4", text:"И я"},
    ],
    newPostText: ''}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD-POST':
            let newPost = {
                id: 5,
                text: state.newPostText,
                countLikes: 0
            }
            state.poss.push(newPost);  
            break;
        case 'CHANGE-POST-TEXT':
            state.newPostText = action.newText;
            break;
    }

    return state;
}
export default profileReducer;