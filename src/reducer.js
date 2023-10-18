
export const reducer = (state, action) => {
    if(action.type ==="HERO_UPDATE"){
        return {
            ...state,
            name: action.payload.name,
            image: action.payload.image,
        }
    }
    if(action.type ==="HOME_UPDATE"){
        return {
            ...state, 
            name: action.payload.name,
            image: action.payload.image,
        }
    }
    return state;
}