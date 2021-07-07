/* eslint-disable prettier/prettier */
import { CODE_SCAN_ADD, CODE_SCAN_CLEAR } from './../constants/Constants';

export const setCodeScanToAdd = (payload: string) => ({
    type: CODE_SCAN_ADD,
    payload,
});

export const setCodeScanToClear = () => ({
    type: CODE_SCAN_CLEAR,
});
