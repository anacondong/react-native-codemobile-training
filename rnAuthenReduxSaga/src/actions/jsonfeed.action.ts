import { ACTIVITY_ADD, JSON_FAILED, JSON_FETCHING, JSON_SUCCESS } from "../Constants";

import axios from 'axios';
import { YoutubeResult } from "../types/youtube.interface";
import { JsonFailed, JsonFetching, JsonSuccess } from "../types/jsonfeed-action.interface";

// Called by reducer
const setJSONToFetching = (): JsonFetching => ({
    type: JSON_FETCHING,
})

const setJSONToSuccess = (payload:any): JsonSuccess => ({
    type: JSON_SUCCESS,
    payload
})

const setJSONToFailed = (error:string): JsonFailed => ({
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

