/* eslint-disable prettier/prettier */
import { AUTH_REQUEST, AUTH_FAILED, AUTH_SUCCESS } from './../constants/Constants';
import axios from 'axios';

export const setAuthLogin = (payload: any) => ({
    type: AUTH_REQUEST,
    payload,
});

export const setAuthSuccess = (payload: any) => ({
    type: AUTH_SUCCESS,
    payload,
});


export const setAuthFailed = () => ({
    type: AUTH_FAILED,
});

export const doAuthServer = async (payload: any) => {
    return axios.post('http://192.168.2.36:3000/login', { username: payload.username, password: payload.password });
};
