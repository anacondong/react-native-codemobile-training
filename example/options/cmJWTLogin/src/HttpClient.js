import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';


import axios from 'axios'
import join from 'url-join'

var isAbsoluteURLRegex = /^(?:\w+:)\/\//;

axios.interceptors.request.use(async (config)=> {
    if (!isAbsoluteURLRegex.test(config.url)) {
        const jwtToken = await AsyncStorage.getItem("token")        
        if (jwtToken != null) {
            config.headers = { 'x-access-token': jwtToken }
        }
        config.url = join('http://172.20.10.4:8082/api/v1', config.url);
    }
    return config;
});

export const httpClient = axios