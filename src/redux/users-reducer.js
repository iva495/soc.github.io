let initialState= {
    userss : [
        {id:"1", followed: true, fullName: "Ivan", status:"о_о", location :{city:"Novosibirsk", country:"Russia"}, photoURL:'https://i.pinimg.com/originals/04/15/a9/0415a98b9c8a363061d241929be68bfd.jpg'},
        {id:"2", followed: false, fullName: "Dark-Rabit", status:"о_о", location :{city:"Moscow", country:"Russia"}, photoURL:'https://s.fishki.net/upload/users/2020/01/30/1385736/d9dbc828f1d275eaa5820a0180447de9.jpg'},
        {id:"3", followed: true, fullName: "Kuroko", status:"-_-", location :{city:"Tokyo", country:"Japain"}, photoURL:'https://s2.best-wallpaper.net/wallpaper/iphone/1706/Total-War-Shogun-2_iphone_1080x1920.jpg'},
        {id:"4", followed: false, fullName: "piu-piu", status:"о_o", location :{city:"Novosibirsk", country:"Russia"}, photoURL:'https://coubsecure-s.akamaihd.net/get/b16/p/coub/simple/cw_image/68cefe573fa/7d59a46c771347e002a54/timeline_1460715772_00009.jpg'},
    ]
}

const usersReducer = (state = initialState, action) => {

    switch(action.type){
        case "FOLLOW":
           
            state.userss.map( u => {
                if(u.id == action.userId){
                    debugger
                    return u.followed = true;
                } 
                return u
            })
            break;
        case "UNFOLLOW":
            state.userss.map( u => {
                if(u.id == action.userId){
                    return  u.followed = false;
                }
                return u
            })
            break;
        default:
            break;
    }

    return state;
}

export const setUsersAC = (userId) => ({type: "UNFOLLOW", userId})

export default usersReducer;