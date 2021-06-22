import { RootReduces } from ".";
import { JSON_FAILED, JSON_FETCHING, JSON_SUCCESS } from "../Constants";
import { JsonAction } from "../types/jsonfeed-action.interface";
import { Youtube } from "../types/youtube.interface";

export interface JsonfeedState {
    result: Youtube[],
    isFetching: boolean,
    isError: boolean
}

const initialState: JsonfeedState = {
    result: [],
    isFetching: false,
    isError: false,
};

export default (state = initialState, action: JsonAction) => {
    switch (action.type) {
        case JSON_FETCHING:
            return { ...state, result: null, isFetching: true, isError: false };
        case JSON_SUCCESS:
            // console.log(JSON.stringify(action.payload));
            return { ...state, isFetching: false, isError: false, result: action.payload };
        case JSON_FAILED:
            return { ...state, result: null, isFetching: false, isError: true };

        default:
            return state;
    }
};

export const JsonfeedSelector = (state: RootReduces) => state.jsonfeedReducer;