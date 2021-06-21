import { ACTIVITY_ADD, ACTIVITY_FAILED, ACTIVITY_SUCCESS, JSON_FAILED, JSON_FETCHING, JSON_SUCCESS } from "../Constants";

import axios from 'axios';
import { YoutubeResult } from "../types/youtube.interface";

// Called by reducer
export const setJSONToFetching = () => ({
    type: JSON_FETCHING,
})

export const setJSONToSuccess = (payload:any) => ({
    type: JSON_SUCCESS,
    payload
})

export const setJSONToFailed = (error:string) => ({
    type: JSON_FAILED,
    error
})

// Called UI Component
export const feedJSON = () => {
    return async (dispatch: any) => {
        try {
            dispatch(setJSONToFetching());
            const result = await doFeedJSON()
            dispatch(setJSONToSuccess(result.data.youtubes));
        } catch (error) {
            dispatch(setJSONToFailed(error));
        }
    };
};

const doFeedJSON = async () => {
    let url = 'https://codemobiles.com/adhoc/youtubes/index_new.php';
    let regUsername = 'admin'; // await AsyncStorage.getItem('username')
    let regPassword = 'password'; // await AsyncStorage.getItem('password')
    let data = `username=${regUsername}&password=${regPassword}&type=foods`;
    return axios.post<YoutubeResult>(url, data);
};

