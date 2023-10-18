import React, {useContext, useReducer} from 'react'
import {reducer} from './reducer'

const AppContext = React.createContext();
const initialState ={
    name:"",
    image:"",
};
const AppProvider = ({ children }) =>{
    const [state, dispatch] =useReducer(reducer, initialState);

const updateHero=()=>{
    return dispatch({
        type:"HERO_UPDATE",
        payload:{
            name:"UI UX Design ",
            image:"./images/banner.jpg",
        }
    })
}
const updateHome=()=>{
    return dispatch({
        type:"HOME_UPDATE",
        payload:{
            name:" AAJUX DESIGN STUDIO",
            image:"./images/banner.jpg",
        }
    })
}
    return <AppContext.Provider value={{...state,updateHome,updateHero}}>{children}</AppContext.Provider>
}
const useGlobalContext =()=>{
    return useContext(AppContext);
}

export {AppContext,AppProvider, useGlobalContext}