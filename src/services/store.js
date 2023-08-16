import { configureStore } from '@reduxjs/toolkit'
// import {createStore} from "redux"

const initialState = {
    token:null,
    fname:null,
    lname:null
}

//Question faut il laisser les valeurs dans le localStorage apres avoir mis à jour le state
function myReducer(state = initialState,action){
  if(action.type == "loggedIn"){
    return {
      ... state,
      token:window.localStorage.getItem('token')
    }
  }
  if(action.type == "isLogged"){
    return {
      ... state,
      token:action.payload.token,
      fname:action.payload.fname,
      lname:action.payload.lname
    }
  }
  if(action.type == "loggedOut"){
    window.localStorage.setItem("token","");
    window.localStorage.setItem("fname","");
    window.localStorage.setItem("lname","");
    return {
      ... state,
      token:null,
      fname:null,
      lname:null
    }
  }
  if(action.type == "setNames"){
    return {
      ... state,
      fname:action.payload.fname,
      lname:action.payload.lname
    }
  }
  return state;
}

export default configureStore({ reducer: myReducer });
