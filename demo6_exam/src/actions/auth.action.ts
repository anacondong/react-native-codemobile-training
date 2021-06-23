/* eslint-disable prettier/prettier */
import { AUTH_ADD, AUTH_CLEAR } from './../constants/Constants';
import axios from 'axios';

export const setAuthLogin = (payload: any) => ({
    type: AUTH_ADD,
    payload,
});

export const setAuthLogout = () => ({
    type: AUTH_CLEAR,
});

export const doAuthServer = async (payload:any) => {

    let data = `username=${payload.username}&password=${payload.password}`;
    return axios.post('http://192.168.2.41:3000/auth', data);
};
