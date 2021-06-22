/* eslint-disable prettier/prettier */
import { ACTIVITY_ADD, ACTIVITY_CLEAR } from './../Constants';

const setActivityToAdd = (payload: string) => ({
    type: ACTIVITY_ADD,
    payload,
});

const setActivityToClear = () => ({
    type: ACTIVITY_CLEAR,
});

export const add = (payload: any) => {
    return dispatch => {
        dispatch(setActivityToAdd(payload));
    };
};

export const clear = () => {
    return dispatch => {
        dispatch(setActivityToClear());
    };
};
