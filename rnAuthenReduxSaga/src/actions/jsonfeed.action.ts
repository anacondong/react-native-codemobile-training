import { ACTIVITY_ADD, JSON_FAILED, JSON_FETCHING, JSON_SUCCESS } from "../Constants";

import axios from 'axios';
import { YoutubeResult } from "../types/youtube.interface";
import { JsonFailed, JsonFetching, JsonSuccess } from "../types/jsonfeed-action.interface";

// Called by reducer
export const setJSONToFetching = (): JsonFetching => ({
    type: JSON_FETCHING,
})

export const setJSONToSuccess = (payload:any): JsonSuccess => ({
    type: JSON_SUCCESS,
    payload
})

export const setJSONToFailed = (error:string): JsonFailed => ({
    type: JSON_FAILED,
    error
})

export const doFeedJSON = async (filter: string = 'foods') => {
    let url = 'https://codemobiles.com/adhoc/youtubes/index_new.php';
    let regUsername = 'admin'; // await AsyncStorage.getItem('username')
    let regPassword = 'password'; // await AsyncStorage.getItem('password')
    let data = `username=${regUsername}&password=${regPassword}&type=${filter}`;
    return axios.post<YoutubeResult>(url, data);
};

