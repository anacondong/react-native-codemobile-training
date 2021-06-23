/* eslint-disable prettier/prettier */
import { AUTH_ADD, AUTH_CLEAR } from './../constants/Constants';
import axios from 'axios';

export const setAuthLogin = (payload: string) => ({
    type: AUTH_ADD,
    payload,
});

export const setAuthLogout = () => ({
    type: AUTH_CLEAR,
});

export const doAuthServer = async (username: string, password: string) => {
    return axios.post('http://192.168.2.41:3000/auth', {
      username: username,
      password: password
    });
};
