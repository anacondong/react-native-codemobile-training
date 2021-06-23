import { HOME_LOGIN_REQ, HOME_LOGIN_SUCCESS, HOME_LOGIN_FAILED } from "../constants";
import {AsyncStorage } from "react-native";


export const setStateToLoginRequest = () => ({
  type: HOME_LOGIN_REQ,
})

export const setStateToLoginSuccess = (payload) => ({
  type: HOME_LOGIN_SUCCESS,
  payload: payload
})

export const setStateToLoginFailed = () => ({
  type: HOME_LOGIN_FAILED,  
})

export const login = (credential, navigation)=> {
  return async (dispatch) =>{

    dispatch(setStateToLoginRequest())

    const {username, password} = credential
    let regUsername = await AsyncStorage.getItem('username')
    let regPassword = await AsyncStorage.getItem('password')
    console.log(`${regUsername}, ${regPassword}`)

    if (username == regUsername && password == regPassword) {
      await AsyncStorage.setItem('isLoggedIn', 'true')
      navigation.navigate('App')
      dispatch(setStateToLoginSuccess(username))
    }else{
      alert('Login failed!1234')
      dispatch(setStateToLoginFailed())
    }
  }
}