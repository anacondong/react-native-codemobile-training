/* eslint-disable prettier/prettier */
import { ACTIVITY_ADD, ACTIVITY_CLEAR } from './../constants/Constants';

export const setActivityToAdd = (payload: string) => ({
    type: ACTIVITY_ADD,
    payload,
});

export const setActivityToClear = () => ({
    type: ACTIVITY_CLEAR,
});
