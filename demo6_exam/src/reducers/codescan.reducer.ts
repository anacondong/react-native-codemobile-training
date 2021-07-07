import { RootReduces } from '.';
import { CODE_SCAN_ADD, CODE_SCAN_CLEAR } from '../constants/Constants';

export interface CodeScanState {
    codeScan: string;
}

const initialState: CodeScanState = {
    codeScan: "",
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case CODE_SCAN_ADD:
            return { ...state, codeScan: action.payload.payload };
        case CODE_SCAN_CLEAR:
            return { ...state, codeScan: "" };
        default:
            return state;
    }
};

export const CodeScanSelector = (state: RootReduces) => state.codeScanReducer;
