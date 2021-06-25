/* eslint-disable prettier/prettier */
import { REGISTER_REQUEST, REGISTER_FAILED, REGISTER_SUCCESS } from './../constants/Constants';
import axios from 'axios';

export const setRegisterRequest = (payload: any) => ({
    type: REGISTER_REQUEST,
    payload,
});

export const setRegisterSuccess = (payload: any) => ({
    type: REGISTER_SUCCESS,
    payload,
});


export const setRegisterFailed = () => ({
    type: REGISTER_FAILED,
});

export const doRegisterServer = async (payload: any) => {
    return axios.post('http://192.168.2.36:3000/register', { username: payload.username, password: payload.password });
};
