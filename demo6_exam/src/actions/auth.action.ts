/* eslint-disable prettier/prettier */
import { AUTH_REQUEST, AUTH_CLEAR, AUTH_FAILED, AUTH_SUCCESS } from './../constants/Constants';
import axios from 'axios';

export const setAuthLogin = (payload: any) => ({
    type: AUTH_REQUEST,
    payload,
});

export const setAuthSuccess = (payload: any) => ({
    type: AUTH_SUCCESS,
    payload,
});

export const setAuthLogout = () => ({
    type: AUTH_CLEAR,
});

export const setAuthFailed = () => ({
    type: AUTH_FAILED,
});

export const doAuthServer = async (payload:any) => {
    return axios.post('http://192.168.2.41:3000/auth/'+payload.username);
};
